import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import css from 'components/ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => (
  <ul className={css.list}>
    {contacts.map(contact => (
      <ContactItem key={contact.id} contact={contact} />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
