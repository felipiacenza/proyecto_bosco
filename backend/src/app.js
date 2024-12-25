// src/app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middlewares
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Salesianos API!');
});

module.exports = app;
