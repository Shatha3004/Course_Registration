import React, { useState } from "react";
import "./UserRegister.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:8080/Register",form)
    .then( (response) => {
        if(response.data==="Registered Successfully")
        {
            alert("Register Successful");
            navigate("/Login");
        }
        else{
            alert(response.data);
        }
    })    
    .catch((error) => {
        alert(error.message);
    })
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}