import React from "react";

const CartItem = ({ item, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-info">
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>
        <div className="quantity-controls">
          <button className="inc" onClick={() => decreaseQuantity(item._id)}>-</button>
          <span>{item.quantity}</span>
          <button className="inc" onClick={() => increaseQuantity(item._id)}>+</button>
        </div>
      </div>
      <button className="remove-btn" onClick={() => removeFromCart(item._id)}>✖</button>
    </div>
  );
};

export default CartItem;
