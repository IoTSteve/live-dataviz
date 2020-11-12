let data = 0;



function setup(){
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB, 360, 100, 300)
}



function draw(){
  let colorval = map(data, 0, 1023, 0, 255);
  background (colorval);




}




let ws = new WebSocket("ws://localhost:1880/ws/recieve")

ws.onopen = function (event){
    console.log(event);
}

ws.onmessage = function(msg){
  console.log(msg.data);
  data = parseInt(msg.data)
  
}