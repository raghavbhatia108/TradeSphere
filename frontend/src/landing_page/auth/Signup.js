import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios';
import { toast } from 'react-toastify';
import './Auth.css';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/signup`,
        { email, password }
      );

      toast.success("Signup successful!");
      navigate("/login");

    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-form-container">
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Start your trading journey</p>
          <form className="auth-form" onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>
            <input
              type="email"
              className="auth-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="auth-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="auth-button">Sign up</button>
          </form>
          <p className="auth-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
      <div className="auth-right bullish">
      <img src='/media/images/ill1.png' height={800} alt="" />
      </div>
    </div>
  )
}

export default Signup