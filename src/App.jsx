import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

function Header() {
  const cartItems = useSelector(state => state.cart.items);
  const total = cartItems.reduce((s, i) => s + i.quantity, 0);
  return (
    <header className="header">
      <Link to="/" className="logo">Paradise Nursery</Link>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/cart">Cart ({total})</Link>
      </nav>
    </header>
  );
}

function LandingPage({ onGetStarted }) {
  return (
    <div className="landing-page">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Paradise Nursery is your one-stop destination for beautiful houseplants. Browse plants, add them to cart, and manage quantities.</p>
      <button className="get-started-btn" onClick={onGetStarted}>Get Started</button>
    </div>
  );
}

function App() {
  const [showProductList, setShowProductList] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={!showProductList ? <LandingPage onGetStarted={() => setShowProductList(true)} /> : <ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
