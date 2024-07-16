import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

const Home = () => {
  const { cart } = useCart();
  return (
    <>
      <h1>신발 상품 목록</h1>
      <div>현재 {cart.length}개의 상품이 있습니다.</div>
      <ProductList />
    </>
  );
};

export default App;
