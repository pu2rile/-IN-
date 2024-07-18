import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import './App.css';

// App 컴포넌트는 애플리케이션의 루트 컴포넌트
const App = () => {
  return (
    // CartProvider는 장바구니 상태를 관리하는 컨텍스트 프로바이더
    <CartProvider>
      {/* Header 컴포넌트는 페이지 상단의 헤더를 표시 */}
      <Header />
      <div className="content">
        {/* Routes는 애플리케이션의 라우트를 정의 */}
        <Routes>
          {/* Home 컴포넌트를 루트 경로에 매핑 */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

// Home 컴포넌트는 메인 페이지의 내용 표시
const Home = () => {
  // productCount는 현재 상품의 개수 저장
  const [productCount, setProductCount] = useState(0);

  return (
    <>
      {/* 페이지 제목 표시 */}
      <h1 className="product-title">신발 상품 목록</h1>
      {/* 현재 상품의 개수 표시 */}
      <div className="product-count">현재 {productCount}개의 상품이 있습니다.</div>
      {/* ProductList 컴포넌트를 표시, 상품 개수를 업데이트하는 콜백 전달 */}
      <ProductList onProductCount={setProductCount} />
    </>
  );
};

export default App;
