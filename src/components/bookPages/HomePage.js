import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync, removeBookAsync } from '../../redux/books/booksSlice';
import { getAppId } from '../../api';
import Book from '../Book';
import BookForm from '../BookForm';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  const appId = getAppId();

  const handleAddBook = async ({ title, author }) => {
    if (title.trim() && author.trim()) {
      const newBook = {
        item_id: uuidv4(),
        title,
        author,
        category: 'Uncategorized',
      };

      try {
        await dispatch(addBookAsync({ APP_ID: appId, book: newBook }));
        setBooks([...books, newBook]);
      } catch (error) {
        console.error('Error adding book:', error.message);
      }
    }
  };

  const handleDeleteBook = async (itemId) => {
    try {
      await dispatch(removeBookAsync({ APP_ID: appId, itemId }));
      setBooks(books.filter((book) => book.item_id !== itemId));
    } catch (error) {
      console.error('Error deleting book:', error.message);
    }
  };

  return (
    <div className="disp-book">
      <div>
        {books.map((book) => (
          <Book key={book.item_id} book={book} onDelete={() => handleDeleteBook(book.item_id)} />
        ))}
      </div>
      <h1 className="form-title">ADD NEW BOOK</h1>
      {}

      <BookForm onAdd={handleAddBook} />

    </div>
  );
};

export default HomePage;
