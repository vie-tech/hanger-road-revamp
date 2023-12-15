import React, { useState } from "react";
import "./admin.css";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://hri-backend-server.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem("authToken", token);
        navigate("/panel");
      } else {
        console.log("Details provided is incorrect");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleLogin}>
        <p className="admin-form-title" style={{ color: "white" }}>
          Sign in to access admin interface
        </p>
        <div className="admin-input-container">
          <input
            type="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <span></span>
        </div>
        <div className="admin-input-container">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="admin-submit">
          Sign in
        </button>
      </form>
    </>
  );
}
