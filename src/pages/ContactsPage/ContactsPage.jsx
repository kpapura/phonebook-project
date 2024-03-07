import { Container } from 'components/App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import React from 'react';

export const ContactsPage = () => {
  return (
    <div style={{ height: '90vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </div>
  );
};
