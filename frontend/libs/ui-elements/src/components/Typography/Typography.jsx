import { StyledTypography } from "./styled";

const tagMapping = {
  text: "p",
  textSm: "p",
  heading1: "h1",
  heading2: "h2",
  heading3: "h3",
  heading4: "h4",
  heading5: "h5",
  heading6: "h6",
  secondary: "p",
  secondarySm: "p",
  error: "p",
};

export const Typography = ({
  name = "text",
  weight,
  color,
  children,
  ...rest
}) => {
  const Tag = tagMapping[name] || "p";
  return (
    <StyledTypography
      as={Tag}
      $name={name}
      $weight={weight}
      $color={color}
      {...rest}
    >
      {children}
    </StyledTypography>
  );
};
