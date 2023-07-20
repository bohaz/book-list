import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, onDelete }) => (
  <div className="book">
    <h3>{title}</h3>
    <p>
      Author:
      {author}
    </p>
    <button type="button" onClick={onDelete}>Delete</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
