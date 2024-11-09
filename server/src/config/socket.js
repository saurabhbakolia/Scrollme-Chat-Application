// src/config/socket.js
const socketIo = require('socket.io');
const { handleChatMessages } = require('../controllers/chatController');

const initSocket = (server) => {
    const io = socketIo(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });

    io.on('connection', (socket) => {
        console.log('New client connected');
        handleChatMessages(io, socket);

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
};

module.exports = { initSocket };
