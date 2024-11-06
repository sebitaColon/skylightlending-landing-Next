import * as yup from 'yup';

// Define el esquema de validación para el formulario de registro
export const forgotPassword = yup.object().shape({
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters").max(20, "Password must be at most 20 characters"),
  confirmPassword: yup.string().required("Confirm password is required").oneOf([yup.ref('password')], "Passwords must match"), 
});