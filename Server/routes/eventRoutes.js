const express = require('express');
const router = express.Router();
const { getEvents, addEvent, updateEventById, deleteEventById, getWeather } = require('../controllers/eventController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/', authenticateToken, getEvents);
router.post('/', authenticateToken, addEvent);
router.put('/:id', authenticateToken, updateEventById);
router.delete('/:id', authenticateToken, deleteEventById);
router.get('/weather', getWeather);

module.exports = router;
