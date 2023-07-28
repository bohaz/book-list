import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import HomePage from './components/bookPages/HomePage';
import CategoriesPage from './components/bookPages/CategoriesPage';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar-container">
        <div className="navbar-content">
          <h1 className="title-nav">Bookstore CMS</h1>
          <ul>
            <li>
              <Link className="books" to="/">BOOKS</Link>
            </li>
            <li>
              <Link className="categories" to="/categories">CATEGORIES</Link>
            </li>
          </ul>
          <div className="navbar-icon">
            <PersonIcon />
          </div>
        </div>

      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
