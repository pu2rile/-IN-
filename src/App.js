import React from 'react';
import { CartProvider, useCart } from './context/CartContext'; // useCart 가져오기
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import ProductDetail from './components/ProductDetail'; // 상품 상세 페이지 컴포넌트 가져오기
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetail />} /> {/* 상품 상세 페이지 라우트 추가 */}
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
