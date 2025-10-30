import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import "../css/NavBar.css";

export default function NavBar() {
  const { user, logout } = useContext(UserContext);
  const { cartItems, clearCart } = useContext(CartContext); // added cartItems
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    clearCart(); // Clear the cart when user logs out
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">Indiecrate</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/shop">Shop</Link></li>

        {/*Cart link with item count */}
        <li className="cart-link">
          <Link to="/cart">
           cart 🛒
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </Link>
        </li>

        {user ? (
          <>
            <li className="greeting">Hello, {user.name}</li>
            <li>
              <button className="link-button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}
