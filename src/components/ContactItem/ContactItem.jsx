import css from 'components/ContactItem/ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.list__item}>
      <p className={css.list__text}>
        {contact.name}: {contact.phone}
      </p>
      <button
        className={css.list__btn}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
