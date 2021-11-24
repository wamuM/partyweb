let btn = document.getElementById("input_btn")
let name =document.getElementById("input_name")
let password =document.getElementById("input_password")

btn.onclick = ()=>{
  alert("jaja")
  let ws = new WebSocket("ws://"+window.location.host)
  ws.onopen = ()=>{
    ws.send("CONNECT "+name+" "+password)
  }
  ws.onmessage = console.log
}