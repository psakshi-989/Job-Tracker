import styled from "styled-components";

interface ThemeProps {
  $isDark?: boolean;
  scoreColor?: string;
}

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

export const ModalContent = styled.div<ThemeProps>`
  background: ${(props) => (props.$isDark ? "#1e1e2e" : "#ffffff")};
  border-radius: 16px;
  border: 1px solid
    ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  padding: 32px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  transition:
    background 0.3s ease,
    border 0.3s ease;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ModalTitle = styled.h2<ThemeProps>`
  color: ${(props) => (props.$isDark ? "#ffffff" : "#1a1a2e")};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  transition: color 0.3s ease;
`;

export const CloseButton = styled.button<ThemeProps>`
  background: none;
  border: none;
  color: ${(props) => (props.$isDark ? "#a0a0a0" : "#666666")};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 4px;
  line-height: 1;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => (props.$isDark ? "#ffffff" : "#1a1a2e")};
  }
`;

export const Card = styled.div<ThemeProps>`
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.8)"};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  border: ${(props) =>
    props.$isDark
      ? "1px solid rgba(255, 255, 255, 0.1)"
      : "1px solid rgba(0, 0, 0, 0.1)"};
  transition:
    background 0.3s ease,
    border 0.3s ease;
`;

export const Section = styled.div`
  margin-bottom: 24px;
`;

export const TextArea = styled.textarea<ThemeProps>`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.05)" : "white"};
  color: ${(props) => (props.$isDark ? "#ffffff" : "#1a1a2e")};
  font-size: 0.95rem;
  font-family: inherit;
  resize: vertical;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"};
    background: ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.02)"};
  }

  &::placeholder {
    color: #707070;
  }
`;

export const UploadArea = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 2px dashed
    ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"};
  border-radius: 8px;
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.02)"};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)"};
  }
`;

export const ScoreCard = styled.div<ThemeProps>`
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.8)"};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  border: 2px solid ${(props) => props.scoreColor || "#4caf50"};
  transition:
    background 0.3s ease,
    border 0.3s ease;
`;

export const SuggestionList = styled.ul<ThemeProps>`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 8px 12px;
    margin-bottom: 8px;
    background: ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"};
    border-radius: 6px;
    color: ${(props) => (props.$isDark ? "#ffffff" : "#1a1a2e")};
    font-size: 0.9rem;
    transition: background 0.2s ease;

    &:before {
      content: "•";
      margin-right: 8px;
      color: ${(props) => (props.$isDark ? "#667eea" : "#4637f5")};
    }
  }
`;

export const OptimizedResume = styled.div<ThemeProps>`
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"};
  padding: 16px;
  border-radius: 8px;
  color: ${(props) => (props.$isDark ? "#ffffff" : "#1a1a2e")};
  font-size: 0.9rem;
  line-height: 1.6;
  white-space: pre-wrap;
  transition: background 0.3s ease;
`;

export const ScoreCircle = styled.div<{ score: number } & ThemeProps>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  position: relative;
  background: conic-gradient(
    ${(props) => getScoreColor(props.score)} ${(props) => props.score}%,
    ${(props) =>
        props.$isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}
      ${(props) => props.score}%
  );
  transition: background 0.5s ease;

  &::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: ${(props) => (props.$isDark ? "#1e1e2e" : "#ffffff")};
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

export const SkillChip = styled.span<{ $matched: boolean } & ThemeProps>`
  display: inline-block;
  padding: 6px 12px;
  margin: 4px;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${(props) =>
    props.$matched ? "rgba(76, 175, 80, 0.15)" : "rgba(244, 67, 54, 0.15)"};
  color: ${(props) => (props.$matched ? "#4caf50" : "#f44336")};
  border: 1px solid
    ${(props) =>
      props.$matched ? "rgba(76, 175, 80, 0.3)" : "rgba(244, 67, 54, 0.3)"};
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border 0.2s ease;
`;

export const SkillChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const RecommendationCard = styled.div<ThemeProps>`
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)"};
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  border-left: 3px solid ${(props) => (props.$isDark ? "#4a9eff" : "#2196f3")};
  font-size: 0.875rem;
  color: ${(props) => (props.$isDark ? "#e0e0e0" : "#333333")};
  transition:
    background 0.2s ease,
    color 0.2s ease;
`;

function getScoreColor(score: number): string {
  if (score >= 80) return "#4caf50";
  if (score >= 60) return "#ff9800";
  return "#f44336";
}
