import React, { useState } from 'react';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} from 'redux/contacts/contactsSlice';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import css from 'components/App.module.css';

const App = () => {
  const [filter, setFilter] = useState('');
  const { data } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const [createContact] = useCreateContactMutation();

  const handleAddContact = data => {
    if (checkName(data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    } else {
      createContact(data);
    }
  };

  const getVisiableContacts = () => {
    return data.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const checkName = filterName => {
    const arr = data.filter(({ name }) => name === filterName);
    if (arr.length > 0) {
      return true;
    }
    return false;
  };

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />

      <h2>Contacts</h2>

      <Filter
        filterValue={filter}
        onChange={e => setFilter(e.currentTarget.value)}
      />

      {data && (
        <ContactList
          contacts={getVisiableContacts().reverse()}
          onDeleteContact={deleteContact}
        />
      )}
    </div>
  );
};

export default App;
