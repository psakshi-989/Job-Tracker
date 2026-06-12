const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js");
const axios = require("axios");

// Set up worker
pdfjsLib.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/legacy/build/pdf.worker.js");

exports.analyzeATS = async (req, res) => {
  try {
    const { jobDescription, resumeText } = req.body;

    if (!jobDescription || !resumeText) {
      return res.status(400).json({
        error: "Job description and resume text are required",
      });
    }

    const GROQ_API_KEY = process.env.GROQ_API_KEY;

    if (!GROQ_API_KEY) {
      return res.status(500).json({
        error: "Groq API key not configured",
      });
    }

    const prompt = `
You are an expert ATS analyzer and resume reviewer.

Analyze the resume against the given job description.

IMPORTANT RULES:
- Return ONLY valid JSON
- Do NOT add markdown
- Do NOT add explanation outside JSON
- Do NOT simply repeat the job description
- Give personalized resume feedback

Return JSON in this exact format:

{
  "atsScore": number,
  "whatsWorking": ["point1", "point2"],
  "gaps": ["gap1", "gap2"],
  "recommendations": ["rec1", "rec2"],
  "matchedSkills": ["skill1", "skill2"],
  "missingSkills": ["skill1", "skill2"],
  "strategicAdvice": "short paragraph"
}

Job Description:
${jobDescription}

Resume:
${resumeText}
`;

    // fallback models
    const MODELS = ["llama-3.1-8b-instant", "llama-3.3-70b-versatile"];

    let responseData = null;

    for (const model of MODELS) {
      try {
        console.log(`Trying model: ${model}`);

        const response = await axios.post(
          "https://api.groq.com/openai/v1/chat/completions",
          {
            model,

            response_format: {
              type: "json_object",
            },

            messages: [
              {
                role: "system",
                content:
                  "You are an ATS analyzer. Always return valid JSON only.",
              },
              {
                role: "user",
                content: prompt,
              },
            ],

            temperature: 0.3,
            max_tokens: 1000,
          },
          {
            headers: {
              Authorization: `Bearer ${GROQ_API_KEY}`,
              "Content-Type": "application/json",
            },
            timeout: 60000,
          },
        );

        responseData = response.data;
        console.log(`Success with model: ${model}`);
        break;
      } catch (modelError) {
        console.error(
          `${model} failed:`,
          modelError.response?.data || modelError.message,
        );
      }
    }

    if (!responseData) {
      throw new Error("All AI models failed");
    }

    const text = responseData.choices[0]?.message?.content;

    if (!text) {
      throw new Error("No response from AI");
    }

    let analysis;

    try {
      analysis = JSON.parse(text);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);

      // fallback extraction
      const jsonMatch = text.match(/\{[\s\S]*\}/);

      if (!jsonMatch) {
        throw new Error("Could not extract JSON");
      }

      analysis = JSON.parse(jsonMatch[0]);
    }

    res.json({
      success: true,
      data: analysis,
    });
  } catch (error) {
    console.error("ATS Analysis Error:", error.response?.data || error.message);

    res.status(500).json({
      error: "Failed to analyze ATS score",
      details: error.response?.data || error.message,
    });
  }
};

exports.parseResume = async (req, res) => {
  try {
    console.log("Parse resume request received");
    console.log("Req file:", req.file);
    console.log("Req headers:", req.headers);

    if (!req.file) {
      console.log("No file in request");
      return res.status(400).json({
        error: "No file uploaded",
      });
    }

    console.log("File details:", {
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
    });

    // Convert Buffer to Uint8Array for pdfjs-dist
    const uint8Array = new Uint8Array(req.file.buffer);

    // Load PDF document
    const loadingTask = pdfjsLib.getDocument({
      data: uint8Array,
    });
    const pdfDocument = await loadingTask.promise;

    let fullText = "";

    // Extract text from all pages
    for (let i = 1; i <= pdfDocument.numPages; i++) {
      const page = await pdfDocument.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item) => item.str).join(" ");
      fullText += pageText + "\n";
    }

    console.log("PDF parsed successfully, text length:", fullText.length);

    res.json({
      success: true,
      text: fullText,
    });
  } catch (error) {
    console.error("Resume Parse Error:", error);

    res.status(500).json({
      error: "Failed to parse resume",
      details: error.message,
    });
  }
};
