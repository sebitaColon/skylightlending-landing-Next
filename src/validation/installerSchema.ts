import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('This field is required.'),
  lastName: yup.string().required('This field is required.'),
  companyName: yup.string().required('This field is required.'),
  contactNumber: yup.string().matches(/^\d+$/, 'Contact number must be a number.').required('This field is required.'),
  email: yup.string().email('Invalid email address.').required('This field is required.'),
  website: yup.string().url('Invalid URL.').optional(),
});

export default schema;