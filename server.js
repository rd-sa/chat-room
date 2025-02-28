const express = require('express');
const socket = require('socket.io');
const app = express();

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});

app.use(express.static('public'));  // Serve static files like your HTML, CSS, JS

const io = socket(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Emit to all connected clients
    });
});
