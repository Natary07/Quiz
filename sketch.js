var canva;
var gameState,contestantCount,database,quiz,question,contestant;

function setup(){
  canvas = createCanvas(850,400);
  firebase = firebase.database();
  getState();
  start();
}


function draw(){
  background("pink");

  
}
