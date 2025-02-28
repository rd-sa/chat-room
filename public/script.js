// Connect to the socket server
const socket = io();

// Send a message when the user submits the form
function sendMessage() {
    const message = document.getElementById('messageInput').value;
    if (message.trim() !== "") {
        socket.emit('chat message', message);  // Emit message to the server
        document.getElementById('messageInput').value = '';
    }
}

// Listen for incoming messages
socket.on('chat message', function(msg) {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    document.getElementById('messages').appendChild(messageElement);
});
