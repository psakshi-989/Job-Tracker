import { Formik, Form, ErrorMessage } from "formik";
import { Button, Typography } from "@ui-elements/components";
import { useTheme } from "../../../core/context/ThemeContext";
import { LoginValidationSchema } from "../../jobs/utils/schema";
import {
  FormContainer,
  StyledField,
  FormHeader,
  AuthFields,
  SubmitWrapper,
  SwitchText,
  SwitchLink,
  ErrorText,
} from "./style";

export const Login = ({ onLogin, onSwitch }) => {
  const { isDark } = useTheme();

  return (
    <FormContainer $isDark={isDark}>
      <FormHeader>
        <Typography
          name="heading2"
          weight={700}
          color={isDark ? "#ffffff" : "#37352f"}
        >
          Welcome back
        </Typography>
        <Typography name="textSm" color={isDark ? "#a0a0a0" : "#7a757f"}>
          Enter your credentials to access your account
        </Typography>
      </FormHeader>

      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginValidationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await onLogin(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <AuthFields>
              <div>
                <Typography
                  name="textSm"
                  weight={600}
                  marginBottom="8px"
                  color={isDark ? "#ffffff" : "#37352f"}
                >
                  Username
                </Typography>
                <StyledField type="text" name="username" $isDark={isDark} />
                <ErrorMessage name="username" component={ErrorText} />
              </div>

              <div>
                <Typography
                  name="textSm"
                  weight={600}
                  marginBottom="8px"
                  color={isDark ? "#ffffff" : "#37352f"}
                >
                  Password
                </Typography>
                <StyledField type="password" name="password" $isDark={isDark} />
                <ErrorMessage name="password" component={ErrorText} />
              </div>
            </AuthFields>

            <SubmitWrapper>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Logging in..." : "Log in"}
              </Button>
            </SubmitWrapper>
          </Form>
        )}
      </Formik>

      <SwitchText $isDark={isDark}>
        Don't have an account?
        <SwitchLink onClick={onSwitch} $isDark={isDark}>
          Sign up
        </SwitchLink>
      </SwitchText>
    </FormContainer>
  );
};
