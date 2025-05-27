import css from './Contact.module.css';
import { HiUser } from 'react-icons/hi';
import { HiPhone } from 'react-icons/hi';

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.container}>
      <div>
        <p>
          <HiUser /> {contact.name}
        </p>
        <p>
          <HiPhone /> {contact.number}
        </p>
      </div>

      <button className={css.button} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
