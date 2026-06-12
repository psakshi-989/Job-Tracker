import styled, { css } from "styled-components";

const buttonVariants = {
  primary: css`
    background: #37352f;
    color: #fff;
    border: 1px solid #37352f;

    &:hover:not(:disabled) {
      background: #2f2d28;
    }
  `,
  secondary: css`
    background: #fff;
    color: #37352f;
    border: 1px solid #d9d9d7;

    &:hover:not(:disabled) {
      background: #f7f6f3;
    }
  `,

  danger: css`
    background: transparent;
    color: #e03e3e;
    border: 1px solid #e03e3e;

    &:hover:not(:disabled) {
      background: #fef2f2;
    }
  `,
};

const buttonSizes = {
  sm: css`
    min-height: 32px;
    padding: 6px 12px;
    font-size: 0.875rem;
  `,
  md: css`
    min-height: 36px;
    padding: 8px 16px;
    font-size: 0.875rem;
  `,
  lg: css`
    min-height: 40px;
    padding: 10px 20px;
    font-size: 1rem;
  `,
};

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition:
    background 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.15s ease;

  ${({ $variant }) => buttonVariants[$variant] || buttonVariants.primary}
  ${({ $size }) => buttonSizes[$size] || buttonSizes.md}

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;
