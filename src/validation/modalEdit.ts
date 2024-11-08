import * as Yup from 'yup';
export const modalEditValition = Yup.object({
    name: Yup.string().required("Name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    role: Yup.string().required("Role is required")
});
