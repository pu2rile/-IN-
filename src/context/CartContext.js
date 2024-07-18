import React, { createContext, useState, useContext } from 'react';

// CartContext는 전역적으로 장바구니 상태를 관리하는 컨텍스트
const CartContext = createContext();

// CartProvider 컴포넌트는 CartContext를 제공하여 하위 컴포넌트들이 장바구니 상태에 접근할 수 있도록 함
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [addedProducts, setAddedProducts] = useState(new Set());

  // addToCart 함수는 상품을 장바구니에 추가하고 해당 상품 ID를 addedProducts에 추가
  const addToCart = (product) => {
    setCart([...cart, product]);
    setAddedProducts(new Set(addedProducts).add(product.id));
  };

  // isProductAdded 함수는 상품이 장바구니에 추가되었는지 여부 확인
  const isProductAdded = (productId) => {
    return addedProducts.has(productId);
  };

  return (
    // CartContext.Provider는 cart, addToCart, isProductAdded를 하위 컴포넌트에 제공
    <CartContext.Provider value={{ cart, addToCart, isProductAdded }}>
      {children}
    </CartContext.Provider>
  );
};

// useCart 훅은 CartContext를 쉽게 사용할 수 있도록 도와줌
export const useCart = () => {
  return useContext(CartContext);
};
