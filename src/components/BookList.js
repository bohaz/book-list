// BookList.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { removeBookAsync } from '../redux/books/booksSlice';
import { getAppId } from '../api';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const appId = getAppId();
  const [bookList, setBookList] = useState(books); // Estado local para la lista de libros

  useEffect(() => {
    // Actualizar el estado local bookList cada vez que cambie el valor de books en Redux
    setBookList(books);
  }, [books]);

  const handleDeleteBook = async (itemId) => {
    try {
      await dispatch(removeBookAsync({ APP_ID: appId, itemId }));
      // Actualizar el estado local bookList después de eliminar el libro
      setBookList(bookList.filter((book) => book.item_id !== itemId));
    } catch (error) {
      console.error('Error deleting book:', error.message);
    }
  };

  return (
    <div>
      {bookList.map((book) => (
        <Book
          key={book.item_id}
          book={book}
          onDelete={() => handleDeleteBook(book.item_id)}
        />
      ))}
    </div>
  );
};

export default BookList;
