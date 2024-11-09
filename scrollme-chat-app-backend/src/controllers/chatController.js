// src/controllers/chatController.js
const { db } = require('../config/firebase');

const handleChatMessages = (io, socket) => {
    socket.on('sendMessage', async (message) => {
        try {
            const newMessage = {
                user: message.user,
                text: message.text,
                timestamp: new Date().toISOString(),
            };

            await db.collection('messages').add(newMessage);
            io.emit('message', newMessage);
        } catch (error) {
            console.error('Error sending message: ', error);
        }
    });
};

module.exports = { handleChatMessages };
