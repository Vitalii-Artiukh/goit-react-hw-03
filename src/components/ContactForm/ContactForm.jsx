import { React, useId } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import contactSchema from '../data/validationSchema';
import clsx from 'clsx';

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const ContactForm = ({ addContact }) => {
  const nameInputId = useId();
  const numberInputId = useId();

  const handleSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form>
        <div>
          <label htmlFor={nameInputId}>
            <span>Name</span>

            <Field type="text" name="name" id={nameInputId} />
            <ErrorMessage name="name" component="span" />
          </label>

          <label htmlFor={numberInputId}>
            <span>Number</span>

            <Field type="text" name="number" id={numberInputId} />
            <ErrorMessage name="number" component="span" />
          </label>

          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
