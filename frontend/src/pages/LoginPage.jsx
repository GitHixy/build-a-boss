import React, { useState } from "react";
import "../App.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    // Simulate failed login
    setError("Invalid credentials. Please try again.");
  };

  return (
    <div className="homepage-container">
      {/* Animated Sparkles - random movement */}
      <div className="sparkle s1" style={{left:'10%', top:'20%', zIndex:1}}></div>
      <div className="sparkle s2" style={{left:'80%', top:'30%', zIndex:1}}></div>
      <div className="sparkle s3" style={{left:'50%', top:'70%', zIndex:1}}></div>
      <div className="sparkle s4" style={{left:'30%', top:'60%', zIndex:1}}></div>
      <div className="sparkle s5" style={{left:'70%', top:'15%', zIndex:1}}></div>
      <div className="sparkle s6" style={{left:'20%', top:'80%', zIndex:1}}></div>
      <div className="sparkle s7" style={{left:'60%', top:'50%', zIndex:1}}></div>
      <div className="sparkle s8" style={{left:'40%', top:'10%', zIndex:1}}></div>
      <div className="sparkle s9" style={{left:'85%', top:'60%', zIndex:1}}></div>
      <div className="sparkle s10" style={{left:'5%', top:'40%', zIndex:1}}></div>
      <div className="sparkle s11" style={{left:'35%', top:'35%', zIndex:1}}></div>
      <div className="sparkle s12" style={{left:'55%', top:'75%', zIndex:1}}></div>
      <div className="sparkle s13" style={{left:'15%', top:'85%', zIndex:1}}></div>
      <div className="sparkle s14" style={{left:'92%', top:'12%', zIndex:1}}></div>
      <div className="sparkle s15" style={{left:'60%', top:'5%', zIndex:1}}></div>
      <div className="sparkle s16" style={{left:'25%', top:'55%', zIndex:1}}></div>
      <div className="auth-card auth-narrow">
        <h1 className="auth-title">Login</h1>
        <form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
          <input
            className="auth-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
          />
          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {error && <div className="auth-error">{error}</div>}
          <button className="homepage-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
