import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onDelete }) => {
  const handleDeleteBook = () => {
    onDelete(book.item_id);
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>
        Author:
        {' '}
        {book.author}
      </p>
      <p>
        Category:
        {' '}
        {book.category}
      </p>
      <button type="button" onClick={handleDeleteBook}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
