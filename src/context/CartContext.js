import React, { createContext, useState, useContext } from 'react';

// CartContext는 전역적으로 장바구니 상태를 관리하는 컨텍스트입니다.
const CartContext = createContext();

// CartProvider 컴포넌트는 CartContext를 제공하여 하위 컴포넌트들이 장바구니 상태에 접근할 수 있도록 합니다.
export const CartProvider = ({ children }) => {
  // cart 상태는 장바구니에 담긴 상품들을 저장합니다.
  const [cart, setCart] = useState([]);
  // addedProducts 상태는 이미 장바구니에 추가된 상품 ID들을 저장하는 Set입니다.
  const [addedProducts, setAddedProducts] = useState(new Set());

  // addToCart 함수는 상품을 장바구니에 추가하고, 해당 상품 ID를 addedProducts에 추가합니다.
  const addToCart = (product) => {
    setCart([...cart, product]);
    setAddedProducts(new Set(addedProducts).add(product.id));
  };

  // isProductAdded 함수는 상품이 장바구니에 추가되었는지 여부를 확인합니다.
  const isProductAdded = (productId) => {
    return addedProducts.has(productId);
  };

  return (
    // CartContext.Provider는 cart, addToCart, isProductAdded를 하위 컴포넌트에 제공합니다.
    <CartContext.Provider value={{ cart, addToCart, isProductAdded }}>
      {children}
    </CartContext.Provider>
  );
};

// useCart 훅은 CartContext를 쉽게 사용할 수 있도록 도와줍니다.
export const useCart = () => {
  return useContext(CartContext);
};
