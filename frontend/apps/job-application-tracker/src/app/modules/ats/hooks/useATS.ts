import { useState } from "react";
import { ATS_API_ENDPOINT, ATS_PARSE_ENDPOINT } from "../constants";

export const useATS = () => {
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeATS = async (jobDescription: string, resumeText: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(ATS_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobDescription,
          resumeText,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setAnalysis(data.data);
      } else {
        setError(data.error || "Failed to analyze ATS score");
      }
    } catch (err) {
      setError("Error analyzing ATS score");
    } finally {
      setLoading(false);
    }
  };

  const parseResume = async (file: File) => {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("resume", file);

    console.log("Uploading file to:", ATS_PARSE_ENDPOINT);
    console.log("FormData entries:", Array.from(formData.entries()));

    try {
      const response = await fetch(ATS_PARSE_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      const data = await response.json();
      console.log("Response data:", data);

      if (data.success) {
        return data.text;
      } else {
        setError(data.error || "Failed to parse resume");
        return null;
      }
    } catch (err) {
      console.error("Upload error:", err);
      setError("Error uploading resume. Make sure backend is running.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    analysis,
    loading,
    error,
    analyzeATS,
    parseResume,
  };
};
