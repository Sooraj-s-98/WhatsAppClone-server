
const express = require('express');
const cors = require('cors');
const socketIO = require('socket.io');
const shared = require('./shared');

const app = express();

app.use(express.json());
app.use(cors());

const server = require('http').createServer(app);
const io = socketIO(server);
shared.io = io;

let users = [];
shared.users = users;

io.on('connection', socket => {
    socket.on("user-in", (user) => {
        const newUser = { ...user, socket };
         users.push(newUser);
        console.log("user = ", users);
        // socket.emit("user-in");
         shared.users = users;
    });
    
    socket.on("user-left", () => {
        users = users.filter(x => x.socket.id !== socket.id);
        shared.users = users;
    });

    socket.on("disconnect", () => {
        users = users.filter(x => x.socket.id !== socket.id);
        shared.users = users;
    });

});


server.listen('8081', () => {
    console.log("Listening on port 8081");
});