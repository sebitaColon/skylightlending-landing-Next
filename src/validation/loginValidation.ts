import * as yup from "yup";

export const loginValidation = yup.object().shape({
  email: yup.string().email("Must be a valid email address").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters long").required("Password is required"),
});
