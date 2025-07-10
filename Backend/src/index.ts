console.log("HI");

import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8000});


// event handler
wss.on("connection",function(socket){
    console.log("User Connected");
    // setInterval(()=>{
    //     socket.send("Current Price of Crypto - "+ Math.random())
    // },500)
    
    // whatever client is sending the message it will come here
    socket.on("message",(e)=>{
        if(e.toString() == "ping"){
            socket.send("pong");
        }
        
    })
})