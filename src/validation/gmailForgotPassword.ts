import * as yup from 'yup';

export const gmailPassword = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email format"),
});