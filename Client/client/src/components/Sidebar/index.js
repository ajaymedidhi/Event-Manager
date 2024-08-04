import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Sidebar = () => {
  return (
    <div className="sidebar-home">
      <h2>Quick Access</h2>
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
      <NavLink to="/events" activeClassName="active">Events</NavLink>
      <NavLink to="/whetherupdate" activeClassName="active">Weather</NavLink>
      <NavLink to="/register" activeClassName="active">Register</NavLink>
      <NavLink to="/login" activeClassName="active">Login</NavLink>
    </div>
  );
};

export default Sidebar;
