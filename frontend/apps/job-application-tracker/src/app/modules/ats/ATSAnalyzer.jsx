import { useState, useRef } from "react";
import { Button, Typography } from "@ui-elements/components";
import { useTheme } from "../../core/context/ThemeContext";
import { useATS } from "./hooks/useATS";
import { getScoreColor, getScoreLabel, copyToClipboard } from "./utils";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  Card,
  Section,
  TextArea,
  UploadArea,
  ScoreCard,
  SuggestionList,
  OptimizedResume,
  ScoreCircle,
  SkillChip,
  SkillChipsContainer,
  RecommendationCard,
} from "./style";

export const ATSAnalyzer = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();
  const [jobDescription, setJobDescription] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const fileInputRef = useRef(null);
  const { analysis, loading, error, analyzeATS, parseResume } = useATS();

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    console.log("File selected:", file);
    if (!file) return;

    setResumeFile(file);
    console.log(
      "Calling parseResume with file:",
      file.name,
      file.size,
      file.type,
    );
    const text = await parseResume(file);
    console.log("Parse result:", text);
    if (text) {
      setResumeText(text);
    }
  };

  const handleButtonClick = () => {
    console.log("Button clicked, triggering file input");
    fileInputRef.current?.click();
  };

  const handleAnalyze = async () => {
    if (!jobDescription || !resumeText) {
      return;
    }
    await analyzeATS(jobDescription, resumeText);
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} $isDark={isDark}>
        <ModalHeader>
          <ModalTitle $isDark={isDark}>ATS Resume Analyzer</ModalTitle>
          <CloseButton onClick={onClose} $isDark={isDark}>
            ×
          </CloseButton>
        </ModalHeader>

        <Card $isDark={isDark} style={{ marginBottom: "16px" }}>
          <Section>
            <Typography
              name="textSm"
              weight={600}
              color={isDark ? "#ffffff" : "#1a1a2e"}
              marginBottom="8px"
            >
              Job Description
            </Typography>
            <TextArea
              $isDark={isDark}
              placeholder="Paste the job description here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              rows={6}
            />
          </Section>

          <Section>
            <Typography
              name="textSm"
              weight={600}
              color={isDark ? "#ffffff" : "#1a1a2e"}
              marginBottom="8px"
            >
              Resume
            </Typography>
            <UploadArea $isDark={isDark}>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                style={{ display: "none" }}
                ref={fileInputRef}
                id="resume-upload"
              />
              <Button type="button" size="sm" onClick={handleButtonClick}>
                {resumeFile ? resumeFile.name : "Upload Resume (PDF)"}
              </Button>
            </UploadArea>
            <TextArea
              $isDark={isDark}
              placeholder="Or paste your resume text here..."
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              rows={6}
              style={{ marginTop: "12px" }}
            />
          </Section>

          {error && (
            <div style={{ color: "#ff6b6b", marginBottom: "16px" }}>
              {error}
            </div>
          )}

          <Button
            onClick={handleAnalyze}
            disabled={loading}
            style={{ width: "100%" }}
          >
            {loading ? "Analyzing..." : "Analyze ATS Score"}
          </Button>
        </Card>

        {analysis && (
          <div style={{ maxHeight: "500px", overflowY: "auto" }}>
            <ScoreCard
              $isDark={isDark}
              scoreColor={getScoreColor(analysis.atsScore)}
            >
              <ScoreCircle score={analysis.atsScore} $isDark={isDark}>
                <Typography
                  name="textLg"
                  weight={700}
                  color={isDark ? "#ffffff" : "#1a1a2e"}
                >
                  {analysis.atsScore}
                </Typography>
                <Typography
                  name="textXs"
                  weight={600}
                  color={isDark ? "#a0a0a0" : "#666666"}
                >
                  /100
                </Typography>
              </ScoreCircle>
              <div style={{ textAlign: "center" }}>
                <Typography
                  name="textSm"
                  weight={600}
                  color={getScoreColor(analysis.atsScore)}
                >
                  {getScoreLabel(analysis.atsScore)}
                </Typography>
              </div>
            </ScoreCard>

            {analysis.matchedSkills && analysis.matchedSkills.length > 0 && (
              <Card $isDark={isDark} style={{ marginBottom: "12px" }}>
                <Typography
                  name="textSm"
                  weight={600}
                  color={isDark ? "#ffffff" : "#1a1a2e"}
                  marginBottom="12px"
                >
                  Matched Skills
                </Typography>
                <SkillChipsContainer>
                  {analysis.matchedSkills.map((skill, index) => (
                    <SkillChip key={index} $isDark={isDark} $matched={true}>
                      {skill}
                    </SkillChip>
                  ))}
                </SkillChipsContainer>
              </Card>
            )}

            {analysis.missingSkills && analysis.missingSkills.length > 0 && (
              <Card $isDark={isDark} style={{ marginBottom: "12px" }}>
                <Typography
                  name="textSm"
                  weight={600}
                  color={isDark ? "#ffffff" : "#1a1a2e"}
                  marginBottom="12px"
                >
                  Missing Skills
                </Typography>
                <SkillChipsContainer>
                  {analysis.missingSkills.map((skill, index) => (
                    <SkillChip key={index} $isDark={isDark} $matched={false}>
                      {skill}
                    </SkillChip>
                  ))}
                </SkillChipsContainer>
              </Card>
            )}

            <Card $isDark={isDark} style={{ marginBottom: "12px" }}>
              <Typography
                name="textSm"
                weight={600}
                color={isDark ? "#ffffff" : "#1a1a2e"}
                marginBottom="12px"
              >
                Recommendations
              </Typography>
              {analysis.recommendations?.map((recommendation, index) => (
                <RecommendationCard key={index} $isDark={isDark}>
                  {recommendation}
                </RecommendationCard>
              ))}
            </Card>

            {analysis.strategicAdvice && (
              <Card $isDark={isDark} style={{ marginBottom: "12px" }}>
                <Typography
                  name="textSm"
                  weight={600}
                  color={isDark ? "#ffffff" : "#1a1a2e"}
                  marginBottom="12px"
                >
                  Strategic Advice
                </Typography>
                <Typography
                  name="textSm"
                  color={isDark ? "#a0a0a0" : "#666666"}
                >
                  {analysis.strategicAdvice}
                </Typography>
              </Card>
            )}

            <Card $isDark={isDark}>
              <Typography
                name="textSm"
                weight={600}
                color={isDark ? "#ffffff" : "#1a1a2e"}
                marginBottom="12px"
              >
                Optimized Resume
              </Typography>
              <OptimizedResume $isDark={isDark}>
                {analysis.optimizedResume}
              </OptimizedResume>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(analysis.optimizedResume);
                  alert("Copied to clipboard!");
                }}
                style={{ marginTop: "12px" }}
              >
                Copy Optimized Resume
              </Button>
            </Card>
          </div>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};
