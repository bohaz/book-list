import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Importamos useSelector y useDispatch
import { removeBook } from '../redux/books/booksSlice'; // Importamos la acción

const BookList = () => {
  const books = useSelector((state) => state.books); // Obtenemos los libros del estado
  const dispatch = useDispatch(); // Creamos una función dispatch para llamar a las acciones

  const handleDeleteBook = (id) => {
    dispatch(removeBook(id)); // Utilizamos la acción removeBook con el dispatch
  };

  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <div key={book.item_id}>
          <h3>{book.title}</h3>
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
          <button type="button" onClick={() => handleDeleteBook(book.item_id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
