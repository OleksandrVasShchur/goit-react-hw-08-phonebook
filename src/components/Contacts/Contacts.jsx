import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import css from 'components/Style/style-app.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';



export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.total_box}>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && <p>Is Loading... </p>}
      {error && <p>{error}</p>}
      <h2>Contacts</h2>
      {contacts.length === 0 && <p>There are no contacts...</p>}

      <Filter />

      <ContactList />
    </div>
  );
};
export default Contacts; 
