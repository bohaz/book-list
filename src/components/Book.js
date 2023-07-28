import React from 'react';
import PropTypes from 'prop-types';
import { Circle } from 'rc-progress';

const Book = ({ book, onDelete }) => {
  const handleDeleteBook = () => {
    onDelete(book.item_id);
  };

  return (
    <div className="book-card">
      <p className="book-category-label">
        {' '}
        {book.category}
      </p>
      <h2 className="book-title-label">{book.title}</h2>
      <div className="book-content">
        <div className="book-left-section">
          <p className="book-author-label">
            {' '}
            {book.author}
          </p>
          <div className="book-actions">
            <button className="comments-button" type="button">Comments</button>
            <span> | </span>
            <button className="delete-button" type="button" onClick={handleDeleteBook}>Remove</button>
            <span> | </span>
            <button className="edit-button" type="button">Edit</button>
          </div>
        </div>
        <div className="book-progress">
          <div className="progress-bar-container">
            <Circle percent="75" strokeWidth="9" strokeColor="#0290ff" className="progress-bar" />
            <p className="current-porcentage-number">75%</p>
            <p className="current-completed">COMPLETED</p>
          </div>
          <div className="current-chapter-container">
            <h3 className="current-chapter">CURRENT CHAPTER</h3>
            <p className="current-chapter-number">Chapter 1</p>
            <button className="progress-button" type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
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
