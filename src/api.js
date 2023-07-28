import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_ID = 'lDUhj00krnQ9SRH2Nqzx'; // Reemplaza 'abc123' con el identificador de tu aplicación

export const getAppId = () => APP_ID;

export const api = axios.create({
  baseURL: BASE_URL,
});

export const addBookAsync = async (bookData) => {
  try {
    const response = await api.post(`/apps/${APP_ID}/books`, bookData);
    return response.data;
  } catch (error) {
    throw new Error('Error adding book to the API');
  }
};

export default api;
