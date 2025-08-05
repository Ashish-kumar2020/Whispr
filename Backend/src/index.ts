console.log("HI");

import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8000 });

// event handler
let userCount = 0;
let allSockets: WebSocket[] = [];
wss.on("connection",  (socket) =>{
  allSockets.push(socket);
  userCount = userCount + 1;
  console.log("USER Connected",userCount);

  // whenever a new message comes to a server below function will be called
  socket.on("message", (message)=>{
    console.log("message received", message.toString());
    for(let i= 0; i < allSockets.length;i++){
      const s = allSockets[i];
      s.send(message.toString() + " : sent from the server");
    }
  })
});
