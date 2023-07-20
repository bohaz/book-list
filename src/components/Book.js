import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, onDelete }) => (
  <div>
    <h2>{title}</h2>
    <p>
      Author:
      {author}
    </p>
    <button type="button" onClick={onDelete}>Remove</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
