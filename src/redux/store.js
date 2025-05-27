import { configureStore } from '@reduxjs/toolkit';
import filterSliceReducer from './filtersSlice';
import contactsSlice from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filters: filterSliceReducer,
  },
});
