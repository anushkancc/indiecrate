import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import HomePage from "./screens/HomePage";
import AboutPage from "./screens/AboutPage";
import Shop from "./screens/Shop";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Login from "./screens/Login";
import { CartProvider } from "./context/CartContext";
import { UserProvider, UserContext } from "./context/UserContext";

function RequireAuth({ children }) {
  const { user } = useContext(UserContext);
  const location = useLocation();
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  return children;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<RequireAuth><HomePage /></RequireAuth>} />
      <Route path="/about" element={<RequireAuth><AboutPage /></RequireAuth>} />
      <Route path="/shop" element={<RequireAuth><Shop /></RequireAuth>} />
      <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
      <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
    </Routes>
  );
}

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <AppRoutes />
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
