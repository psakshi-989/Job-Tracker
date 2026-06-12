import styled from "styled-components";
import { Field } from "formik";

interface ThemeProps {
  $isDark?: boolean;
}

export const FormContainer = styled.div<ThemeProps>`
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.05)" : "white"};
  padding: 20px 24px 24px;
  border-radius: 12px;
  border: 0.5px solid
    ${(props) => (props.$isDark ? "rgba(255, 255, 255, 0.1)" : "#e4e2dc")};
  margin-bottom: 32px;
  transition:
    background 0.3s ease,
    border 0.3s ease;
`;

export const baseFieldStyles = `
  width: 100%;
  padding: 9px 12px;
  border-radius: 6px;
  border: 0.5px solid #e4e2dc;
  font-size: 0.875rem;
  color: #37352f;
  background: white;
  font-family: inherit;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #37352f;
    box-shadow: 0 0 0 2px rgba(55, 53, 47, 0.08);
  }

  &::placeholder { color: #b8b5b0; }
`;

export const StyledField = styled(Field)<ThemeProps>`
  ${baseFieldStyles}
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.05)" : "white"};
  color: ${(props) => (props.$isDark ? "#ffffff" : "#37352f")};
  border-color: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.1)" : "#e4e2dc"};
  transition:
    background 0.3s ease,
    border 0.3s ease,
    color 0.3s ease;
`;

export const FormHeader = styled.div`
  margin-bottom: 28px;
`;

export const AuthFields = styled.div`
  display: grid;
  gap: 18px;
  margin-top: 24px;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SubmitWrapper = styled(FormFooter)`
  margin-top: 28px;
`;

export const SwitchText = styled.div<ThemeProps>`
  margin-top: 20px;
  color: ${(props) => (props.$isDark ? "#a0a0a0" : "#7a757f")};
  font-size: 0.93rem;
  transition: color 0.3s ease;
`;

export const SwitchLink = styled.button<ThemeProps>`
  border: none;
  background: none;
  color: ${(props) => (props.$isDark ? "#667eea" : "#4637f5")};
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  margin-left: 6px;
  transition: color 0.3s ease;
`;

export const ErrorText = styled.div`
  color: #d93025;
  font-size: 0.75rem;
  margin-top: 4px;
`;
