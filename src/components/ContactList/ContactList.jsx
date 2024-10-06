import { React } from 'react';
import Contact from '../Contact/Contact';
import clsx from 'clsx';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={clsx(styles.contactsWrapper)}>
      {contacts.map(cont => (
        <li key={cont.id}>
          <Contact data={cont} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
