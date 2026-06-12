import { Formik, Form, ErrorMessage } from "formik";
import { Button, Typography } from "@ui-elements/components";
import { useTheme } from "../../../core/context/ThemeContext";
import {
  AuthFields,
  FormContainer,
  FormHeader,
  StyledField,
  SubmitWrapper,
  SwitchLink,
  SwitchText,
  ErrorText,
} from "./style";
import { SignupValidationSchema } from "../../jobs/utils/schema";

export const Signup = ({ onSignup, onSwitch }) => {
  const { isDark } = useTheme();

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={SignupValidationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await onSignup(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <FormContainer $isDark={isDark}>
          <Form>
            <FormHeader>
              <Typography
                name="heading4"
                weight={700}
                color={isDark ? "#ffffff" : "#37352f"}
              >
                Create your account
              </Typography>
              <Typography name="textSm" color={isDark ? "#a0a0a0" : "#7a757f"}>
                Get started with a secure account and begin tracking jobs right
                away.
              </Typography>
            </FormHeader>

            <AuthFields>
              <div>
                <StyledField
                  type="text"
                  name="username"
                  placeholder="Username"
                  $isDark={isDark}
                />
                <ErrorMessage name="username" component={ErrorText} />
              </div>
              <div>
                <StyledField
                  type="password"
                  name="password"
                  placeholder="Password"
                  $isDark={isDark}
                />
                <ErrorMessage name="password" component={ErrorText} />
              </div>
            </AuthFields>

            <SubmitWrapper>
              <Button
                type="submit"
                size="sm"
                style={{ width: "100%" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating..." : "Create account"}
              </Button>
            </SubmitWrapper>

            <SwitchText $isDark={isDark}>
              Already have an account?
              <SwitchLink type="button" onClick={onSwitch} $isDark={isDark}>
                Login
              </SwitchLink>
            </SwitchText>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};
