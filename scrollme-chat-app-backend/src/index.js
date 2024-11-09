// src/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { initSocket } = require('./config/socket.js');
const chatRoutes = require('./routes/chatRoutes');
const { errorHandler } = require('./middlewares/errorHandler');
const logger = require('./utils/logger');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('combined', { stream: logger.stream }));

// Routes
app.use('/api/chat', chatRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server and Initialize Socket.io
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});

initSocket(server);
