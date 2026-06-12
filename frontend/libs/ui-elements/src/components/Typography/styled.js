import styled, { css } from "styled-components";

const variantStyles = {
  text: css`
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 400;
  `,
  textSm: css`
    font-size: 0.875rem;
    line-height: 1.5;
    font-weight: 400;
  `,
  heading1: css`
    font-size: 2rem;
    line-height: 1.2;
    font-weight: 700;
    letter-spacing: -0.02em;
  `,
  heading2: css`
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
  heading3: css`
    font-size: 1.25rem;
    line-height: 1.4;
    font-weight: 600;
  `,
  heading4: css`
    font-size: 1.125rem;
    line-height: 1.4;
    font-weight: 600;
  `,
  heading5: css`
    font-size: 1rem;
    line-height: 1.4;
    font-weight: 600;
  `,
  heading6: css`
    font-size: 0.875rem;
    line-height: 1.4;
    font-weight: 600;
    color: #37352f;
  `,
  secondary: css`
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 400;
  `,
  secondarySm: css`
    font-size: 0.875rem;
    line-height: 1.5;
    font-weight: 400;
  `,
  error: css`
    font-size: 0.875rem;
    color: #e03e3e;
    line-height: 1.5;
    font-weight: 400;
  `,
};

export const StyledTypography = styled.p`
  margin: 0;
  ${({ $name }) => variantStyles[$name] || variantStyles.text}
  ${({ $weight }) => $weight && `font-weight: ${$weight};`}
  ${({ $color }) => $color && `color: ${$color};`}
`;
