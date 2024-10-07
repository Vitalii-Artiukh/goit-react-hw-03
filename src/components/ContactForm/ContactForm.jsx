import { React, useId } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import contactSchema from '../data/validationSchema';
import styles from './ContactForm.module.css';
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
      <Form className={clsx(styles.form)}>
        <div className={clsx(styles.formWrapper)}>
          <label htmlFor={nameInputId} className={clsx(styles.label)}>
            <span>Name</span>

            <Field
              className={clsx(styles.input)}
              type="text"
              name="name"
              id={nameInputId}
            />
            <ErrorMessage name="name" component="span" />
          </label>

          <label htmlFor={numberInputId} className={clsx(styles.label)}>
            <span>Number</span>

            <Field
              className={clsx(styles.input)}
              type="text"
              name="number"
              id={numberInputId}
            />
            <ErrorMessage name="number" component="span" />
          </label>

          <button className={clsx(styles.btn)} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
