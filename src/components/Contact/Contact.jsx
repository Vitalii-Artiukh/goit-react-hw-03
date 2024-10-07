import { React } from 'react';
import clsx from 'clsx';
import styles from './Contact.module.css';

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={clsx(styles.contactsWrapper)}>
      <div className={clsx(styles.textWrapper)}>
        <p className={clsx(styles.name)}>
          <span className={clsx(styles.icon)}>👤 </span>
          {name}
        </p>
        <p className={clsx(styles.number)}>
          <span className={clsx(styles.icon)}>📞 </span>
          {number}
        </p>
      </div>
      <button
        className={clsx(styles.btn)}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
