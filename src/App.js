import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/" element={<Books />} />
      </Routes>
    </Router>
  );
}

export default App;
