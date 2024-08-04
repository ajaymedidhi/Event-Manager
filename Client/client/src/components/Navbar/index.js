import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  const handleLogout = () => { 
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="header"> 
    <NavLink to="/"><img className='logo-img' src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1722657899/appointment-icon-with-calendar-linear-design_116137-13864_zfulcf.jpg"/> </NavLink>
      <div className="header-left"> 
        
        <NavLink to="/" exact className="logo">EventManager</NavLink>
      </div>
      <div className="header-right">
        <NavLink to="/events" className="nav-link">Events</NavLink>
        <NavLink to="/whetherupdate" className="nav-link">Weather</NavLink>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Navbar
