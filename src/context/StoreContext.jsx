import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // Initialize cart items from food_list
  const defaultCart = () => {
    let cart = {};
    food_list.forEach((item) => {
      cart[item._id] = 0;
    });
    return cart;
  };

  const [cartItems, setCartItems] = useState(defaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId] || prev[itemId] <= 0) return prev;
      return {
        ...prev,
        [itemId]: prev[itemId] - 1,
      };
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        const itemInfo = food_list.find(
          (product) => String(product._id) === String(itemId)
        );
        if (itemInfo) {
          totalAmount += itemInfo.price * quantity;
        }
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
