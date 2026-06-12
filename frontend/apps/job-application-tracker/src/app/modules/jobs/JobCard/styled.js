import styled from "styled-components";

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

export const Card = styled.article`
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.9)"};
  border-radius: 12px;
  border: 1px solid
    ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    background: ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 1)"};
    border-color: ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"};
  }

  ${Actions} {
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover ${Actions} {
    opacity: 1;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CompanyName = styled.div`
  color: ${(props) => (props.$isDark ? "#ffffff" : "#1a1a2e")};
  font-size: 0.95rem;
  font-weight: 600;
  transition: color 0.3s ease;
`;

export const JobTitle = styled.div`
  color: ${(props) => (props.$isDark ? "#a0a0a0" : "#666666")};
  font-size: 0.85rem;
  font-weight: 400;
  transition: color 0.3s ease;
`;

export const DateText = styled.div`
  color: ${(props) => (props.$isDark ? "#707070" : "#999999")};
  font-size: 0.75rem;
  font-weight: 400;
  transition: color 0.3s ease;
`;

export const CompanyLogo = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const ActionButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #ffffff;
  font-size: 0.9rem;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
