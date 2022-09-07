import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import css from 'components/ContactItem/ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();

  return (
    <li className={css.list__item}>
      <p className={css.list__text}>
        {contact.name}: {contact.phone}
      </p>
      <button
        className={css.list__btn}
        onClick={() => deleteContact(contact.id)}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </button>
      {isSuccess && Notify.success('Contact deleted')}
    </li>
  );
};

export default ContactItem;
