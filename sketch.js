var gamestate = 0;
var playerCount, database;
var name;
var player, game, form;
var allPlayers;
var car1, car2, car3, car4, cars;
var reset;
var carImg1, carImg2, carImg3, carImg4;
var track;

function preload()
{
  carImg1 = loadImage("car1.png");
  carImg2 = loadImage("car2.png");
  carImg3 = loadImage("car3.png");
  carImg4 = loadImage("car4.png");
  track = loadImage("track.jpg");
}

function setup()
{
      createCanvas(windowWidth,windowHeight + 100);
      database = firebase.database();
      game = new Game();
      game.getState();
      game.start();
      reset = createButton("Reset");
      reset.position(100, 100);
    
}

function draw()
{
      if(playerCount == 4)
      {
          game.updateState(1);
      }

      if(gamestate == 1)
      {
          game.play();
      }
      reset.mousePressed(function(){
          database.ref("/").update({
            Gamestate : 0,
            PlayerCount : 0,
            Players: "" 
          })
      });
      if(gamestate == 2)
      {
          game.end();
      }
}