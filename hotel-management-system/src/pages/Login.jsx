import React, { useState } from "react";
import Layout from "../components/Layout";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary validation for testing
    if (email === "" || password === "") {
      setError("Both fields are required!");
    } else {
      setError("");
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <Layout>
      <div
        className="container  login-page"
        style={{ margin: "0", padding: "0" }}
      >
        <h1>Login</h1>
        <p>Please enter your email and password to log into your account.</p>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit} className="mt-3">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
