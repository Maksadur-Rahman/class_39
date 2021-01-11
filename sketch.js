var form, player,game;
var gameState=0;
var playerCount=0;
var database;
var allPlayers;
var car1,car2,car3,car4;
var cars;
var carImg1,carImg2,carImg3,carImg4;
var track;


function preload(){

  carImg1=loadImage("images/car1.png");
  carImg2=loadImage("images/car2.png");
  carImg3=loadImage("images/car3.png");
  carImg4=loadImage("images/car4.png");
  track=loadIage("images/track.jpg");

}
function setup()
{
  database=firebase.database();
  createCanvas(displayWidth-20,displayHeight-30);
  
  // call the game object and the functions getState and start
  game=new Game();
  game.getState();
  game.start();
}
function draw(){

  if(playerCount===4){

    game.update(1);


  }
  if(gameState===1){
    
    clear();
    game.play();

  }

}