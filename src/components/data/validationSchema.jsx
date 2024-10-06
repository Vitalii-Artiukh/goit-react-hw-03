import * as Yup from 'yup';

const phoneNumberSample =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

//  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name too short!')
    .max(50, 'Name too long!')
    .required('Name is required!'),
  number: Yup.string()
    .min(7, 'Phone number is too short!')
    .max(17, 'Phone number is too long!')
    .required('Phone number is required!'),
  // .matches(phoneNumberSample, 'Invalid phone number'),
});

export default contactSchema;
