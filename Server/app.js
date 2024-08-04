const express = require('express');
const app = express();
const cors = require('cors');  
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

module.exports = app;
