const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const collegeRoutes = require('./routes/colleges');
const admissionRoutes = require('./routes/admissions');
const reviewRoutes = require('./routes/reviews');
const userRoutes = require('./routes/users');

app.use('/colleges', collegeRoutes);
app.use('/admissions', admissionRoutes);
app.use('/reviews', reviewRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => res.send('API Running'));

module.exports = app; 