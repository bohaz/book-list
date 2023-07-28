import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-named-as-default
import api from '../../api';

export const addBookAsync = createAsyncThunk(
  'books/addBookAsync',
  async ({ APP_ID, book }) => {
    try {
      const response = await api.post(`/apps/${APP_ID}/books`, book);
      return response.data;
    } catch (error) {
      console.error('Error adding book:', error.message);
      throw error;
    }
  },
);

export const removeBookAsync = createAsyncThunk(
  'books/removeBookAsync',
  async ({ APP_ID, itemId }) => {
    try {
      await api.delete(`/apps/${APP_ID}/books/${itemId}`);
      return itemId;
    } catch (error) {
      throw new Error('Error al eliminar el libro de la API');
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBookAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    // eslint-disable-next-line max-len
    builder.addCase(removeBookAsync.fulfilled, (state, action) => state.filter((book) => book.item_id !== action.payload));
  },
});

export default booksSlice.reducer;
