import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import AboutPage from "./screens/AboutPage";
import Shop from "./screens/Shop";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Login from "./screens/Login";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";  // 👈

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
