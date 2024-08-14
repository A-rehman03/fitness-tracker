const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const errorHandler = require('./utils/errorhandling');
require('dotenv').config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); // Use authRoutes for /api/auth

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
