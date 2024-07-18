import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import ProductDetail from './components/ProductDetail';
import './App.css';

// App 컴포넌트는 전체 애플리케이션의 주요 구조를 정의
const App = () => {
  return (
    // CartProvider는 CartContext를 제공하여 애플리케이션에서 장바구니 상태를 관리
    <CartProvider>
      {/* Header 컴포넌트는 페이지 상단의 헤더를 표시 */}
      <Header />
      <div className="content">
        {/* Routes 컴포넌트는 애플리케이션의 라우팅을 정의 */}
        <Routes>
          {/* Home 컴포넌트를 루트 경로에 매핑 */}
          <Route path="/" element={<Home />} />
          {/* CartPage 컴포넌트를 /cart 경로에 매핑 */}
          <Route path="/cart" element={<CartPage />} />
          {/* ProductDetail 컴포넌트를 /product/:id 경로에 매핑 */}
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

// Home 컴포넌트는 상품 목록 페이지 정의
const Home = () => {
  // productCount 상태는 현재 상품의 개수 저장
  const [productCount, setProductCount] = useState(0);

  return (
    <>
      <h1>신발 상품 목록</h1>
      {/* 현재 상품 개수 표시 */}
      <div>현재 {productCount}개의 상품이 있습니다.</div>
      {/* ProductList 컴포넌트를 사용하여 상품 목록을 표시하고 상품 개수를 업데이트하는 함수를 전달 */}
      <ProductList onProductCount={setProductCount} />
    </>
  );
};

export default App;
