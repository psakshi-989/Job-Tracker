import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Typography } from "@ui-elements/components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  FormContainer,
  FormField,
  StyledField,
  ErrorText,
  SubmitButton,
} from "./style";
import { JobValidationSchema } from "../utils/schema";

export const AddJobModal = ({
  isOpen,
  onClose,
  onSubmit,
  editingJob,
  $isDark,
}) => {
  if (!isOpen) return null;

  const isEditing = !!editingJob;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} $isDark={$isDark}>
        <ModalHeader>
          <ModalTitle $isDark={$isDark}>
            {isEditing ? "Edit Job" : "Add New Job"}
          </ModalTitle>
          <CloseButton onClick={onClose} $isDark={$isDark}>
            ×
          </CloseButton>
        </ModalHeader>

        <Formik
          initialValues={{
            companyName: editingJob?.companyName || "",
            role: editingJob?.role || "",
            status: editingJob?.status || "Applied",
            notes: editingJob?.notes || "",
          }}
          validationSchema={JobValidationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log("Form submitted with values:", values);
            await onSubmit(values);
            setSubmitting(false);
            onClose();
          }}
          enableReinitialize
        >
          {({ isSubmitting }) => (
            <Form>
              <FormContainer>
                <FormField>
                  <Typography
                    name="textSm"
                    color={$isDark ? "#a0a0a0" : "#666666"}
                  >
                    Company
                  </Typography>
                  <StyledField
                    type="text"
                    name="companyName"
                    $isDark={$isDark}
                  />
                  <ErrorMessage name="companyName" component={ErrorText} />
                </FormField>

                <FormField>
                  <Typography
                    name="textSm"
                    color={$isDark ? "#a0a0a0" : "#666666"}
                  >
                    Job title
                  </Typography>
                  <StyledField type="text" name="role" $isDark={$isDark} />
                  <ErrorMessage name="role" component={ErrorText} />
                </FormField>

                <FormField>
                  <Typography
                    name="textSm"
                    color={$isDark ? "#a0a0a0" : "#666666"}
                  >
                    Status
                  </Typography>
                  <Field
                    as="select"
                    name="status"
                    style={{
                      width: "100%",
                      padding: "9px 12px",
                      borderRadius: "6px",
                      border: $isDark
                        ? "1px solid rgba(255, 255, 255, 0.1)"
                        : "1px solid #e4e2dc",
                      fontSize: "0.875rem",
                      color: $isDark ? "#ffffff" : "#37352f",
                      background: $isDark
                        ? "rgba(255, 255, 255, 0.05)"
                        : "white",
                      fontFamily: "inherit",
                    }}
                  >
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                  </Field>
                </FormField>

                <FormField>
                  <Typography
                    name="textSm"
                    color={$isDark ? "#a0a0a0" : "#666666"}
                  >
                    Notes (optional)
                  </Typography>
                  <StyledField
                    as="textarea"
                    name="notes"
                    rows="3"
                    $isDark={$isDark}
                  />
                </FormField>
              </FormContainer>

              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                style={{ marginTop: "24px" }}
              >
                {isSubmitting
                  ? isEditing
                    ? "Updating..."
                    : "Adding..."
                  : isEditing
                    ? "Update job"
                    : "Add job"}
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </ModalOverlay>
  );
};
