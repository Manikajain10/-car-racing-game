class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
       background(img);
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
  background("white")
  Player.getPlayerInfo();
  if(allPlayers!=undefined){
    var position = 50;
    for(var i in allPlayers){
      var display = createElement('P')
      display.html(allPlayers[i].name+": "+allPlayers[i].distance);
      display.position(50, position);
      position = position+20;
    
       
    }
 
  }
   if(keyDown (UP_ARROW) && player.index != null){
  player.distance = player.distance+50;
  player.update();


   }

   
}
}
