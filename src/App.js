import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import CardManagement from './components/CardManagement';
import CardAddPage from './components/CardAddPage';
import PaymentSuccess from './components/PaymentSuccess'; // 결제 완료 페이지 import
import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const location = useLocation();

  const showHeader = !['/card-management', '/add-card', '/shopping-cart'].includes(location.pathname);

  const addCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <CartProvider>
      {showHeader && <Header />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card-management" element={<CardManagement cards={cards} />} />
          <Route path="/add-card" element={<CardAddPage addCard={addCard} />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/payment-success" element={<PaymentSuccess />} /> {/* 결제 완료 페이지 경로 추가 */}
        </Routes>
      </div>
    </CartProvider>
  );
};

const Home = () => {
  const [productCount, setProductCount] = useState(0);

  return (
    <>
      <h1 className="product-title">신발 상품 목록</h1>
      <div className="product-count">현재 {productCount}개의 상품이 있습니다.</div>
      <ProductList onProductCount={setProductCount} />
    </>
  );
};

export default App;