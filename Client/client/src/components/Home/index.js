import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Events from '../Events'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => { 
    const fetchUsername = async (token) => {
      try {
        const response = await axios.get('https://claw-server-rjw6.onrender.com/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsername(response.data.name);
      } catch (error) {
        console.error('Failed to fetch user details', error);
      }
    };
    const jwtToken = localStorage.getItem('token');

    if (jwtToken) {
      setIsAuthenticated(true); 
      fetchUsername(jwtToken);
    } else {
      setIsAuthenticated(false);
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="home">
      <Navbar />
      <div className="main-content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          {isAuthenticated ? (
            <>
              <h1 className='home-heading'>Welcome, {username} to the Event Manager App</h1>
              <Events />
            </>
          ) : (
            <p>Please log in to view this content.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
