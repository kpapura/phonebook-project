import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from 'axiosConfig/authApi';


export const fetchContactsThunk = createAsyncThunk(
  'fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await authApi.get("/contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'addContacts',
  async (credentials, thunkApi) => {
    try {
      const { data } = await authApi.post("/contacts", credentials);
      return data;
    } catch (error) {
            console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'deleteContacts',
  async (id, thunkApi) => {
    try {
      await authApi.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
