import React, { useState } from 'react';
import axios from 'axios'; 
import Navbar from '../Navbar'
import './index.css'; 

const Weather = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [weatherError, setWeatherError] = useState(null);

  const fetchWeather = async (location, date) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/events/weather?location=${location}&date=${date}`);
      setWeatherData(response.data);
      setWeatherError(null);
    } catch (error) {
      setWeatherError('Failed to fetch weather data');
      setWeatherData(null);
      console.error('Failed to fetch weather data', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(location, date);
  };

  return (
    <>
    <Navbar/> 
     <div className='whether-main'>
     <div className="weather-container">
      <h2>Check Weather</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Get Weather</button>
      </form>
      {weatherError && <p>{weatherError}</p>}
      {weatherData && (
        <div className="weather-data">
          <h3>Weather for {location} on {date}</h3>
          <p>Temperature: {weatherData.main.temp}°K</p>
          <p>Wind speed: {weatherData.wind.speed}km/hr</p> 
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
     </div>
    </>
  );
};

export default Weather;
