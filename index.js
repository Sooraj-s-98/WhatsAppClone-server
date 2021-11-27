const express = require("express");
var http = require("http");
const app = express();
const port = process.env.PORT || 4000;
var server = http.createServer(app);
var io = require("socket.io")(server);

const sendMessage=require('./modules/sendmessage').sendMessage;




//middlewre
app.use(express.json());
sendMessage("text",1,"test response",2);
io.on("connection", (socket) => {

  console.log("connetetd");
  console.log(socket.id, "has joined");
  socket.on("/test",data=>{
    console.log(data)
  })
});

server.listen(port, "0.0.0.0", () => {
  console.log(`server started ${port} `);
  
});