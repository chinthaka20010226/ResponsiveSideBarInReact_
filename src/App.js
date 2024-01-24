import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Analytics from './Pages/Analytics';
import Comment from './Pages/Comment';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';

function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/analytics" element={<Analytics />}/>
          <Route path="/comment" element={<Comment />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/productList" element={<ProductList />}/>
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
