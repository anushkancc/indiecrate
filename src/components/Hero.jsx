import { Link } from "react-router-dom";
import "../css/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Welcome to IndieCrate</h1>
        <p>Discover unique and handcrafted products just for you</p>
        <Link to="/shop">
          <button className="hero-btn">Shop Now</button>
        </Link>
      </div>
    </section>
  );
}
