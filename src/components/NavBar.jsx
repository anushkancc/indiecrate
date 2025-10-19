
import { Link } from "react-router-dom";
import "../css/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Indiecrate</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart 🛒</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
