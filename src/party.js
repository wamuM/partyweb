
let ws = new WebSocket("ws://"+window.location.host)
console.log(ws.readyState)
ws.onopen = ()=>{
  ws.send("CONNECT Party 12345678")
}
