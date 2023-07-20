import React, { useState } from 'react';
import BookList from '../BookList';
import BookForm from '../BookForm';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>Book List</h1>
      <BookForm onAdd={handleAddBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
};

export default HomePage;
