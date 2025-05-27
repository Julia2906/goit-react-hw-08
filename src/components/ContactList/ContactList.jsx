import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectVisibleContacts } from '../../redux/selector';

const formatPhoneNumber = phone => {
  return phone.replace(/\sx\d+$/, '');
};

const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <Contact
              contact={{
                ...contact,
                number: formatPhoneNumber(contact.number),
              }}
              onDelete={handleDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
