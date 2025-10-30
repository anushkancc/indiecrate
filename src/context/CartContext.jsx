// This file creates and manages the Cart Context for the app.
// It allows all components to access and update the shopping cart without passing props manually.
// CartContext holds the data for the cart.
// CartProvider shares this data with the whole app.
// Components can use useContext(CartContext) to access or modify the cart.

import { createContext, useState } from "react";

// Create a new context that will store all cart-related data and functions.
export const CartContext = createContext();

// CartProvider is a React component that provides cart data to the whole app.
// It wraps around components that need access to the cart.
export function CartProvider({ children }) {
  // State variable to store all items currently in the cart.
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart.
  // If the item already exists, it increases its quantity instead of adding a duplicate.
  function addToCart(product) {
    const existingItem = cartItems.find((item) => item._id === product._id);

    if (existingItem) {
      // If item already in cart, increase its quantity by 1
      const updatedCart = cartItems.map((item) => {
        if (item._id === product._id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedCart);
    } else {
      // If item not in cart, add it as a new item with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  // Function to remove a product completely from the cart.
  function removeFromCart(id) {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
  }

  // Function to increase quantity of a specific item by 1.
  function increaseQuantity(id) {
    const updatedCart = cartItems.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setCartItems(updatedCart);
  }

  // Function to decrease quantity of a specific item by 1, but not below 1.
  function decreaseQuantity(id) {
    const updatedCart = cartItems.map((item) => {
      if (item._id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setCartItems(updatedCart);
  }

  // Calculate the total cost of all items in the cart.
  // Loops through all items and adds up (price × quantity).
  const total = cartItems.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);

  // Function to clear the entire cart (used when user logs out).
  function clearCart() {
    setCartItems([]);
  }

  // The Provider makes all the cart data and functions available
  // to any component wrapped inside CartProvider.
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        total,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}