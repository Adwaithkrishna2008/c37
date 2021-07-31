var canvas;
var gameState=0;
var contestantCount,answer,allContestants;
var quiz1,contestants,questions;
var database;

function setup(){
database=firebase.database()
canvas = createCanvas(850,400);
contestants = new Contestant();
quiz1=new Quiz()
quiz.getState();
quiz.start();
}


function draw(){
  background("pink");
if(contestantCount===4){
  quiz.update(1)
}

if(gameState===1){
  clear();
  quiz.play();
}


  
}
