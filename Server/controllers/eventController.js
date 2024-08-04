const Event = require('../models/Event');
const axios = require('axios');

async function getEvents(req, res) {
  const { userId } = req.user;

  try {
    const events = await Event.find({ userId });
    res.status(200).json(events);
  } catch (err) {
    res.status(500).send('Server error');
  }
}

async function addEvent(req, res) {
  const { title, description, date, location } = req.body;
  const { userId } = req.user;

  try {
    const newEvent = new Event({ title, description, date, location, userId });
    await newEvent.save();
    res.status(201).send('Event created successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
}

async function updateEventById(req, res) {
  const { id } = req.params;
  const { title, description, date, location } = req.body;

  try {
    await Event.findByIdAndUpdate(id, { title, description, date, location });
    res.status(200).send('Event updated successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
}

async function deleteEventById(req, res) {
  const { id } = req.params;

  try {
    await Event.findByIdAndDelete(id);
    res.status(200).send('Event deleted successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
}

async function getWeather(req, res) {
  const { location } = req.query;

  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_API_KEY}`);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).send('Failed to fetch weather data');
  }
}

module.exports = { getEvents, addEvent, updateEventById, deleteEventById, getWeather };
