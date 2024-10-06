import { useState, React, useEffect } from 'react';
import { nanoid } from 'nanoid';
import styles from './App.module.css';
import clsx from 'clsx';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import initialContacts from './data/initialContacts';

export const App = () => {
  const [contactItem, setContactItem] = useState(() => {
    const saveContacts = localStorage.getItem('savedContacts');
    if (saveContacts !== null) {
      return JSON.parse(saveContacts);
    }
    return initialContacts;
  });

  const [toFilter, setToFilter] = useState('');

  const deleteContact = contactId => {
    setContactItem(delContact => {
      return delContact.filter(cont => cont.id !== contactId);
    });
  };

  const filteredContacts = contactItem.filter(
    cont =>
      cont.name.toLowerCase().includes(toFilter.toLowerCase()) ||
      cont.number.toLowerCase().includes(toFilter.toLowerCase())
  );

  const addContact = newContact => {
    const contact = {
      ...newContact,
      id: nanoid(),
    };
    setContactItem(wCont => [...wCont, contact]);
  };

  useEffect(() => {
    document.title = 'Phone book';
  });

  useEffect(() => {
    localStorage.setItem('savedContacts', JSON.stringify(contactItem));
  }, [contactItem]);

  return (
    <div>
      <h1 className={clsx(styles.h1)}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox toFilter={toFilter} setToFilter={setToFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
