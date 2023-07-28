import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-named-as-default
import api from '../../api';

export const addBookAsync = createAsyncThunk(
  'books/addBookAsync',
  async ({ APP_ID, book }) => {
    try {
      const response = await api.post(`/apps/${APP_ID}/books`, book);
      console.log('API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error adding book:', error.message);
      console.log('API response:', error.response);
      console.log('Error details:', error.response.data.error); // Agrega esta línea para inspeccionar la respuesta completa de la API
      throw error;
    }
  },
);

export const removeBookAsync = createAsyncThunk(
  'books/removeBookAsync',
  async ({ APP_ID, itemId }) => {
    try {
      await api.delete(`/apps/${APP_ID}/books/${itemId}`);
      console.log('Libro eliminado exitosamente:', itemId);
      return itemId;
    } catch (error) {
      console.error('Error al eliminar el libro:', error.message);
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
    builder.addCase(removeBookAsync.fulfilled, (state, action) => {
      console.log('Book removed with itemId:', action.payload);
      return state.filter((book) => book.item_id !== action.payload);
    });
  },
});

export default booksSlice.reducer;
