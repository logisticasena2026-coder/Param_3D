import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('mq3d_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('mq3d_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, selectedMaterial, selectedColor, quantity = 1) => {
    setCartItems(prev => {
      // Clave única considerando ID del producto, material elegido y color elegido
      const itemKey = `${product.id}-${selectedMaterial || 'standard'}-${selectedColor || 'standard'}`;
      const existingIndex = prev.findIndex(item => item.itemKey === itemKey);

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [
        ...prev,
        {
          itemKey,
          productId: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          material: selectedMaterial,
          color: selectedColor,
          quantity,
          imageUrl: product.imageUrl,
          dimensions: product.dimensions
        }
      ];
    });
  };

  const updateQuantity = (itemKey, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemKey);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.itemKey === itemKey ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (itemKey) => {
    setCartItems(prev => prev.filter(item => item.itemKey !== itemKey));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartSubtotal,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
