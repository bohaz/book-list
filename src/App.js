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
        <Route exact path="/" component={HomePage} />
        <Route path="/categories" component={CategoriesPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
