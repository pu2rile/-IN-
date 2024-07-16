import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [addedProducts, setAddedProducts] = useState(new Set());

  const addToCart = (product) => {
    setCart([...cart, product]);
    setAddedProducts(new Set(addedProducts).add(product.id));
  };

  const isProductAdded = (productId) => {
    return addedProducts.has(productId);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, isProductAdded }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
