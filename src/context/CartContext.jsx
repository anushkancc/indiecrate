import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  function addToCart(product) {
    const existingItem = cartItems.find((item) => item._id === product._id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) => {
        if (item._id === product._id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  // Remove item from cart
  function removeFromCart(id) {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
  }

  // Increase quantity
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

  // Decrease quantity
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

  // Total price
  const total = cartItems.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);

  // Clear cart (when logging out)
  function clearCart() {
    setCartItems([]);
  }

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
