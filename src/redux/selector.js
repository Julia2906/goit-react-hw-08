import { createSelector } from '@reduxjs/toolkit';

export const selectContact = state => state.contacts.items;
export const selectFilter = state => state.filters.name;
export const selectIsLoading = state => state.contacts.loading;
export const selectIsError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContact, selectFilter],
  (contacts, filterName) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);
