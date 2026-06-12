import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { Button, Typography } from "@ui-elements/components";
import {
  FieldRow,
  FormContainer,
  StyledTextArea,
  baseFieldStyles,
  StyledField,
  StyledSelect,
  ErrorText,
  FormFooter,
} from "./styled";

const validationSchema = Yup.object({
  companyName: Yup.string()
    .required("Company name is required")
    .min(2, "Company name must be at least 2 characters"),
  role: Yup.string()
    .required("Job role is required")
    .min(2, "Job role must be at least 2 characters"),
  status: Yup.string()
    .required("Status is required")
    .oneOf(["Applied", "Interview", "Offer", "Rejected"], "Invalid status"),
  notes: Yup.string().max(500, "Notes must be less than 500 characters"),
});

const initialValues = {
  companyName: "",
  role: "",
  status: "Applied",
  notes: "",
};

export const JobForm = ({ onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    }}
  >
    {({ isSubmitting }) => (
      <FormContainer>
        <Form>
          <Typography name="heading5" weight={600}>
            Add application
          </Typography>
          <FieldRow>
            <div>
              <StyledField
                type="text"
                name="companyName"
                placeholder="Company name"
              />
              <ErrorMessage name="companyName" component={ErrorText} />
            </div>
            <div>
              <StyledField type="text" name="role" placeholder="Job role" />
              <ErrorMessage name="role" component={ErrorText} />
            </div>
          </FieldRow>
          <div>
            <StyledSelect name="status">
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </StyledSelect>
            <ErrorMessage name="status" component={ErrorText} />
          </div>
          <div>
            <StyledTextArea name="notes" placeholder="Notes (optional)" />
            <ErrorMessage name="notes" component={ErrorText} />
          </div>
          <FormFooter>
            <Button type="submit" size="sm" disabled={isSubmitting}>
              {isSubmitting ? "Adding..." : "Add job"}
            </Button>
          </FormFooter>
        </Form>
      </FormContainer>
    )}
  </Formik>
);
