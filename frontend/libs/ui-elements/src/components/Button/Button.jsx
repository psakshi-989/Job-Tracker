import { StyledButton } from "./styled";

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  ...props
}) => (
  <StyledButton
    $variant={variant}
    $size={size}
    type={props.type || "button"}
    {...props}
  >
    {children}
  </StyledButton>
);
