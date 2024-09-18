import * as yup from 'yup';

// Define el esquema de validación para el formulario de registro
export const registerValidation = yup.object().shape({
  name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters").max(50, "Name must be at most 50 characters"),
  last_name: yup.string().required("Last name is required").min(2, "Last name must be at least 2 characters").max(50, "Last name must be at most 50 characters"),
  email: yup.string().required("Email is required").email("Invalid email format"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters").max(20, "Password must be at most 20 characters"),
  confirmPassword: yup.string().required("Confirm password is required").oneOf([yup.ref('password')], "Passwords must match"), 
});