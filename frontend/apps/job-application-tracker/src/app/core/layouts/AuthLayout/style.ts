import styled from "styled-components";

interface ThemeProps {
  $isDark?: boolean;
}

export const Page = styled.div<ThemeProps>`
  min-height: 100vh;
  background: ${(props) =>
    props.$isDark
      ? "#1a1a2e"
      : "rad-gradient(circle at top left, rgba(216, 170, 255, 0.25), transparent 28%), radial-gradient(circle at bottom right, rgba(182, 224, 255, 0.28), transparent 24%), #faf8f4"};
  transition: background 0.3s ease;
`;

export const Container = styled.div`
  min-height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
`;

export const Card = styled.div<ThemeProps>`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 32px;
  border-radius: 32px;
  overflow: hidden;
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.95)"};
  box-shadow: ${(props) =>
    props.$isDark
      ? "0 40px 120px rgba(0, 0, 0, 0.5)"
      : "0 40px 120px rgba(34, 28, 20, 0.12)"};
  border: 1px solid
    ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.8)"};
  transition:
    background 0.3s ease,
    border 0.3s ease,
    box-shadow 0.3s ease;

  @media (max-width: 930px) {
    grid-template-columns: 1fr;
  }
`;

export const FormPanel = styled.div<ThemeProps>`
  padding: 48px 40px;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.02)" : "white"};
  transition: background 0.3s ease;
`;

export const HeroPanel = styled.div<ThemeProps>`
  position: relative;
  padding: 56px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) =>
    props.$isDark
      ? "rgba(255, 255, 255, 0.03)"
      : "linear-gradient(160deg, #f9efff 0%, #eef6ff 100%)"};
  transition: background 0.3s ease;
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at top right,
      rgba(147, 130, 255, 0.25),
      transparent 30%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(93, 196, 255, 0.18),
      transparent 26%
    );
  pointer-events: none;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 420px;
`;

export const HeroBadge = styled.div<ThemeProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 999px;
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.8)"};
  border: 1px solid
    ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.9)"};
  color: ${(props) => (props.$isDark ? "#ffffff" : "#5a4d91")};
  font-weight: 600;
  margin-bottom: 22px;
  font-size: 0.875rem;
  transition:
    background 0.3s ease,
    border 0.3s ease,
    color 0.3s ease;
`;

export const HeroShape = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #876cff, #5e4bff);
  top: -28px;
  right: -28px;
  filter: blur(12px);
  opacity: 0.75;
`;

export const AuthCard = styled.div<ThemeProps>`
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.9)"};
  border-radius: 16px;
  border: 1px solid
    ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  padding: 40px;
  width: 100%;
  max-width: 400px;
  backdrop-filter: blur(10px);
  transition:
    background 0.3s ease,
    border 0.3s ease;
`;

export const Logo = styled.div<ThemeProps>`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => (props.$isDark ? "#ffffff" : "#1a1a2e")};
  text-align: center;
  margin-bottom: 32px;
  transition: color 0.3s ease;
`;

export const Footer = styled.footer<ThemeProps>`
  text-align: center;
  padding: 22px 24px;
  color: ${(props) => (props.$isDark ? "#a0a0a0" : "#7a766f")};
  font-size: 0.95rem;
  transition: color 0.3s ease;
`;
