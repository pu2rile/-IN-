import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import ProductDetail from './components/ProductDetail';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

const Home = () => {
  const [productCount, setProductCount] = useState(0);

  return (
    <>
      <h1>신발 상품 목록</h1>
      <div>현재 {productCount}개의 상품이 있습니다.</div>
      <ProductList onProductCount={setProductCount} />
    </>
  );
};

export default App;
