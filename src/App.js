import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import CardManagement from './components/CardManagement';
import CardAddPage from './components/CardAddPage';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const location = useLocation();
  const isCardManagement = location.pathname === '/card-management';
  const isCardAddPage = location.pathname === '/add-card';

  const addCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <CartProvider>
      {!(isCardManagement || isCardAddPage) && <Header />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card-management" element={<CardManagement cards={cards} />} />
          <Route path="/add-card" element={<CardAddPage addCard={addCard} />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
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