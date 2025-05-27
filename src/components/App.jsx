import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './searchBox/SearchBox';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import {
  selectContact,
  selectIsError,
  selectIsLoading,
} from '../redux/selector';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {isError && <p>Not found</p>}
      {isLoading && <p>Loading...</p>}
      {contacts.length > 0 && <SearchBox />}
      {contacts.length > 0 && <ContactList />}
    </>
  );
}
