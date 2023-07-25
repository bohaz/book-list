import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import BookList from '../BookList';
import { addBook } from '../../redux/books/booksSlice';

const HomePage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = () => {
    if (title.trim() && author.trim()) {
      dispatch(
        addBook({
          item_id: `item${Date.now()}`,
          title,
          author,
          category: 'Uncategorized',
        }),
      );
      setTitle('');
      setAuthor('');
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
      <BookList />
    </div>
  );
};

export default HomePage;
