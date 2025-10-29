import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/checkout.css";

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  // Auto-fill user data
  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.name || "",
        phone: user.phone || "",
        email: user.email || "",
        address: user.address || "",
        city: "",
        pincode: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Simulate order placed
    console.log("Order placed:", { formData, cartItems, total });
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/"); // Redirect to home
  };

  return (
    <>
      <NavBar />
      <div className="checkout-container">
        <h1 className="checkout-title">Checkout</h1>
        <div className="checkout-content">
          {/* Billing Form */}
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

          {/* Order Summary */}
          <div className="order-summary">
            <h2>Order Summary</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div className="summary-item" key={item._id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p>
                      <strong>{item.name}</strong>
                    </p>
                    <p>Qty: {item.quantity}</p>
                    <p>Price: ₹{item.price}</p>
                    {item.discount && <p>Discount: {item.discount}%</p>}
                  </div>
                </div>
              ))
            )}
            <hr />
            <p>
              <strong>Total: ₹{total}</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Simple popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2> Order Placed!</h2>
            <p>Thank you for shopping with us.</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Checkout;
