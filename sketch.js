var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var allPlayers;

var form, player, game;
var img;

function preload(){
  img = loadImage ("background.jpg");

}


function setup(){
  canvas = createCanvas(1200,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

