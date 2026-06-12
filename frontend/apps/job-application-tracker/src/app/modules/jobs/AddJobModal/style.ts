import styled from "styled-components";
import { Field } from "formik";

interface ThemeProps {
  $isDark?: boolean;
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

export const Modal = styled.div`
  position: relative;
`;

export const ModalContent = styled.div<ThemeProps>`
  background: ${(props) => (props.$isDark ? "#1e1e2e" : "#ffffff")};
  border-radius: 16px;
  border: 1px solid
    ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  padding: 32px;
  width: 100%;
  max-width: 480px;
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

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledField = styled(Field)<ThemeProps>`
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"};
  border: 1px solid
    ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  border-radius: 8px;
  padding: 12px 16px;
  color: ${(props) => (props.$isDark ? "#ffffff" : "#1a1a2e")};
  font-size: 0.95rem;
  font-family: inherit;
  outline: none;
  transition: all 0.2s ease;
  resize: vertical;

  &::placeholder {
    color: #707070;
  }

  &:focus {
    border-color: ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"};
    background: ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"};
  }

  &.error {
    border-color: #ff6b6b;
  }
`;

export const ErrorText = styled.div`
  color: #ff6b6b;
  font-size: 0.8rem;
  margin-top: 4px;
`;

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;
