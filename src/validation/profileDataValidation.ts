import * as yup from 'yup';

export const profileDataValidation = yup.object().shape({
    name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters").max(50, "Name must be at most 50 characters"),
    last_name: yup.string().required("Last name is required").min(2, "Last name must be at least 2 characters").max(50, "Last name must be at most 50 characters"),
})  