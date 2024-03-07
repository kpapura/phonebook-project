import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Notification } from 'components/Notification/Notification';
import { Loader } from 'components/Loader/Loader';

import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/contacts/contactsSelectors';

import { Button, List, ListItem } from './ContactList.styled';
import {
  deleteContactsThunk,
  fetchContactsThunk,
} from '../../redux/contacts/contactsOperations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Notification message={error} />}
      {filteredContacts?.length === 0 ? (
        <Notification message="No contacts have been found" />
      ) : (
        <List>
          {filteredContacts?.map(contact => (
            <ListItem key={contact.id}>
              {contact.name}: {contact.number}
              <Button onClick={e => dispatch(deleteContactsThunk(contact.id))}>
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};
