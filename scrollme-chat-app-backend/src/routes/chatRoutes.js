// src/routes/chatRoutes.js
const express = require('express');
const { handleChatMessages } = require('../controllers/chatController');

const router = express.Router();

// Define additional RESTful routes for chat if needed
// Example:
// router.get('/messages', fetchMessages);

module.exports = router;
