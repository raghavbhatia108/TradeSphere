import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { setAuth } from '../../utils/auth';
import { toast } from 'react-toastify';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`,
          {email, password}
      );
      setAuth(res.data.token, res.data.user);
      toast.success("Login successful!");
      navigate("/dashboard");
    }
    catch(error){
      toast.error(error.response?.data?.message || "Login failed");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-form-container">
          <h1 className="auth-title">Login</h1>
          <p className="auth-subtitle">Access your trading account</p>
          <form className="auth-form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
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
            <button type="submit" className="auth-button">Login</button>
          </form>
          <p className="auth-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
      <div className="auth-right bearish">
      <img src='/media/images/ill2.png' height={800}/>
        
        </div>
    </div>
  );
}

export default Login