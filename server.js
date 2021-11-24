const UIDGenerator = require('uid-generator');
const tokenGen= new UIDGenerator();

const PORT = 8080;

const express = require("express")
const app = express()

app.use("/src",express.static(__dirname+"/src"))

app.get("/",(req,res)=>{
   res.sendFile(__dirname+"/src/index.html")
})
app.get("/party",(req,res)=>{
   res.sendFile(__dirname+"/src/party.html")
})
app.get("/host",(req,res)=>{
   res.sendFile(__dirname+"/src/host.html")
})
app.get("/api/:arg",(req,res)=>{
  switch(req.param.arg){
    case "colour":

    default:
    break;
  }
  res.send("test")
})

const server = app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`)
})

const WebSocket = require("ws");
const url = require("url")

const wss = new WebSocket.Server({ noServer: true });
var party = undefined;
var host  = undefined;

server.on('upgrade', function upgrade(request, socket, head) {// Upgrade from HTTP to WS
    const pathname = url.parse(request.url).pathname;
      wss.handleUpgrade(request, socket, head, function done(ws) {
        wss.emit('connection', ws, request);
      });
    if(false)socket.destroy();
});

/*
  Conection
 */
wss.addListener("connection",async (ws,request)=>{
    ws.onmessage = (msg)=>wssOnMessage(msg,ws);
})
function wssOnMessage(msg,cws){
  let msglines = msg.split("\n")
  let headerArray = msglines[0].split(" ")
  let verb = headerArray[0]
  let ws = socket.get(headerArray[1])

  if(!ws){//log in 
    cws.password = headerArray[2]
    ws = socket.set(header[1],cws).get(header[1])
  }else{
    if(!socket.get(headerArray[1]).password == headerArray[2]) return ws.close(408,"Unauthorized")
    if(header[1]=="Host" ) host = ws 
    if(header[1]=="Party")party = ws
    // what would you do with a drunken sailor?
  }
  switch(verb){
    case "CONNECT":
    case "BLANK":
      console.log("test")
      ws.send("ACK 200")
    break;
    default:
      ws.send("ERROR")
    break;
  }
  
}

var tickcounter = 0;
function tick(){
  tickcounter++;
}
setInterval(tick,500)