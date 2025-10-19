import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/checkout.css";

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: ""
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <>
      <NavBar />
      <div className="checkout-container">
        <h1 className="checkout-title">Checkout</h1>
        <div className="checkout-content">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <div className="form-row">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>

          <div className="order-summary">
            <h2>Order Summary</h2>
            {cartItems.map((item) => (
              <div className="summary-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <p><strong>{item.name}</strong></p>
                  <p>Qty: {item.quantity}</p>
                  <p>Price: ₹{item.price}</p>
                  {item.discount && <p>Discount: {item.discount}%</p>}
                </div>
              </div>
            ))}
            <hr />
            <p><strong>Total: ₹{total}</strong></p>
          </div>
        </div>
      </div>

      {/* ✅ Popup after order placed */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>🎉 Order Placed!</h2>
            <p>Thank you for shopping with us.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Checkout;
