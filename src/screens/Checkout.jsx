import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/checkout.css";

//Importing local images for UPI logos
import gpay from "../assets/gpay.png";
import phonepe from "../assets/phonepe.png";
import paytm from "../assets/paytm.png";

const Checkout = () => {
  const { cartItems, total, clearCart } = useContext(CartContext);
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

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [selectedUpi, setSelectedUpi] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  //Auto-fill user data
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        fullName: user.name || "",
        phone: user.phone || "",
        email: user.email || "",
        address: user.address || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    console.log("Order placed:", { formData, cartItems, total, paymentMethod, selectedUpi });
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/");
  };

  const upiApps = [
    { name: "Google Pay", icon: gpay },
    { name: "PhonePe", icon: phonepe },
    { name: "Paytm", icon: paytm },
  ];

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

           
            <div className="payment-method-section">
              <h3>Payment Method</h3>

              <label className="payment-method-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="COD"
                  checked={paymentMethod === "COD"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cash on Delivery
              </label>

              <label className="payment-method-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Card"
                  checked={paymentMethod === "Card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Card Payment
              </label>

              <label className="payment-method-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Online"
                  checked={paymentMethod === "Online"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Online Payment (UPI)
              </label>

              
              {paymentMethod === "Online" && (
                <div className="payment-extra-fields">
                  <p className="upi-label">Select UPI App:</p>
                  <div className="upi-apps">
                    {upiApps.map((app) => (
                      <label key={app.name} className="upi-option">
                        <input
                          type="radio"
                          name="upiApp"
                          value={app.name}
                          checked={selectedUpi === app.name}
                          onChange={(e) => setSelectedUpi(e.target.value)}
                        />
                        <img src={app.icon} alt={app.name} />
                        {app.name}
                      </label>
                    ))}
                  </div>
                </div>
              )}

        
              {paymentMethod === "Card" && (
                <div className="payment-extra-fields">
                  <input type="text" placeholder="Cardholder Name" />
                  <input type="text" placeholder="Card Number" />
                  <div className="form-row">
                    <input type="text" placeholder="Expiry (MM/YY)" />
                    <input type="text" placeholder="CVV" />
                  </div>
                </div>
              )}
            </div>

            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>

         
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

      
     {showPopup && (
  <div className="popup-overlay">
    <div className="popup-box">
      <h2>Order Placed Successfully!</h2>
      <p className="popup-message">Thank you for shopping with IndieCrate.</p>

      <div className="popup-details">
        <p><strong>Order ID:</strong> #{Math.floor(100000 + Math.random() * 900000)}</p>
        <p><strong>Total Amount:</strong> ₹{total}</p>
        <p><strong>Payment Method:</strong> {paymentMethod === "COD" ? "Cash on Delivery" : paymentMethod}</p>
        <p><strong>Estimated Delivery:</strong> 5–7 business days</p>
      </div>

      <button
          className="continue-btn"
          onClick={() => {
          clearCart(); //Clears cart after successful order
            navigate("/shop");
        }}>Continue Shopping
      </button>

    </div>
  </div>
)}

      <Footer />
    </>
  );
};

export default Checkout;
