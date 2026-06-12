import {
  ATS_SCORE_COLORS,
  ATS_SCORE_THRESHOLDS,
  SKILL_CHIP_COLORS,
} from "./constants";

export const getScoreColor = (score: number): string => {
  if (score >= ATS_SCORE_THRESHOLDS.EXCELLENT) {
    return ATS_SCORE_COLORS.EXCELLENT;
  }
  if (score >= ATS_SCORE_THRESHOLDS.GOOD) {
    return ATS_SCORE_COLORS.GOOD;
  }
  return ATS_SCORE_COLORS.POOR;
};

export const getScoreLabel = (score: number): string => {
  if (score >= ATS_SCORE_THRESHOLDS.EXCELLENT) {
    return "Excellent";
  }
  if (score >= ATS_SCORE_THRESHOLDS.GOOD) {
    return "Good";
  }
  return "Needs Improvement";
};

export const getSkillChipColor = (isMatched: boolean): string => {
  return isMatched ? SKILL_CHIP_COLORS.MATCHED : SKILL_CHIP_COLORS.MISSING;
};

export const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};
