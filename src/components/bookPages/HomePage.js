import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync, removeBookAsync } from '../../redux/books/booksSlice';
import { getAppId } from '../../api';
import Book from '../Book';

const HomePage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  const appId = getAppId();

  const handleAddBook = async () => {
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
        setTitle('');
        setAuthor('');
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
    <div>
      <h1>Books</h1>
      <div>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="button" onClick={handleAddBook}>Add Book</button>
      </div>
      <div>
        {books.map((book) => (
          <Book key={book.item_id} book={book} onDelete={() => handleDeleteBook(book.item_id)} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
