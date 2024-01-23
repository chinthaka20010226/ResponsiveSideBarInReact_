import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
// import logo from './logo.svg';
// import './App.css';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Comment from './Pages/Comment';
import Analytics from './Pages/Analytics';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Router>
  );
}

export default App;
