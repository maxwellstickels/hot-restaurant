// Dependencies
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
var PORT = process.env.PORT || 6500;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

// Get request returns all reservations. Here in case we need it.
app.get('/api/tables', (req, res) => {
  return res.json(reservations);
});

// Make new reservation, add it to reservation array.
app.post('/reserve', (req, res) => {
  const reservation = req.body;
  reservations.push(reservation);
  res.json(reservation);
});

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));