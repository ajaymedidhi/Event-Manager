import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import Weather from './components/Weather';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} /> 
      <Route path="/whetherupdate" element={<Weather/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
