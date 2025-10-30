import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/login.css";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const url = isRegister
      ? "http://localhost:5000/api/register"
      : "http://localhost:5000/api/login";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed");
      login(data.user);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>{isRegister ? "Register" : "Login"}</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            {isRegister && (
              <>
                <input name="name" placeholder="Name" onChange={handleChange} required />
                <input name="phone" placeholder="Phone" onChange={handleChange} />
                <input name="address" placeholder="Address" onChange={handleChange} />
              </>
            )}
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">{isRegister ? "Register" : "Login"}</button>
          </form>
          <div className="switch-mode">
            {isRegister ? (
              <p>Already have an account? <button onClick={() => setIsRegister(false)}>Login</button></p>
            ) : (
              <p>New user? <button onClick={() => setIsRegister(true)}>Register</button></p>
            )}
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Login;
