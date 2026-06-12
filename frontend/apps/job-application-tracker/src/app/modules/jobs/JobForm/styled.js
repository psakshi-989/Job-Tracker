import styled from "styled-components";
import { Field } from "formik";

export const FormContainer = styled.div`
  background: white;
  padding: 20px 24px 24px;
  border-radius: 12px;
  border: 0.5px solid #e4e2dc;
  margin-bottom: 32px;
`;

export const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
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

export const StyledField = styled(Field)`
  ${baseFieldStyles}
`;

export const StyledSelect = styled(Field).attrs({ as: "select" })`
  ${baseFieldStyles}
`;

export const StyledTextArea = styled(Field).attrs({ as: "textarea" })`
  ${baseFieldStyles}
  min-height: 80px;
  resize: vertical;
`;

export const ErrorText = styled.div`
  color: #d93025;
  font-size: 0.75rem;
  margin-top: 4px;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;
