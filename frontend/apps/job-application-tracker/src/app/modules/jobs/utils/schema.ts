import * as Yup from "yup";

export const SignupValidationSchema = Yup.object({
  username: Yup.string().required("Username is required").min(2, "Too short"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password too short"),
});

export const LoginValidationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export const JobValidationSchema = Yup.object({
  companyName: Yup.string().required("Company name is required"),
  role: Yup.string().required("Job title is required"),
  status: Yup.string().required("Status is required"),
});
