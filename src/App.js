import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import HomePage from './components/bookPages/HomePage';
import CategoriesPage from './components/bookPages/CategoriesPage';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
