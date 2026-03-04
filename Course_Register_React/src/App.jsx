import { useState } from 'react'
import './App.css'

import { useNavigate } from 'react-router-dom';

function App() {

  const navigate=useNavigate();

  const isLoggedIn = localStorage.getItem("token"); // or "user"

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };


  return (

    <>

    <div className="app-container">

      <nav className="navbar">
      <h3 className="logo">Course App</h3>

      <div className="nav-actions">
        {!isLoggedIn ? (
          <button onClick={() => navigate("/login")}>Login</button>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>

    <div className="btn-wrapper">
      <button className="nav-btn" onClick={() => navigate('/Register')}>
        Course Register
      </button>

      <button className="nav-btn" onClick={() => navigate('/students')}>
        Student List
      </button>

      <button className="nav-btn" onClick={() => navigate('/Available')}>
        Available Courses
      </button>
      
    </div>

    </div>

    </>

  )
}

export default App
