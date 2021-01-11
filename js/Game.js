class Game{

    constructor(){


    }
   
   
   
      getState() // read the game State from Database
   
    { 
      var gameStateref=database.ref("gameState");
gameStateref.on("value",function(data){
    gameState=data.val();
});
   
        

    }
    
    
    update(state) // update the gameState from the database
    {
      database.ref('/').update({
        gameState:state
    })


    }
    

    play(){

      form.hide();
      //textSize(30);
      //text("game start", 120,100);
      Player.getPlayerInfo();
      if(allPlayers!=undefined){
        background("gray");
            var index=0;
            var x=0;
            var y;
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
       // var display_position=130;
        for(var ptr in allPlayers){

          index=index+1;
          x=x+200;
          y=displayHeight-allPlayers[ptr].distance;
          cars[index-1].x=x;
          cars[index-1].y=y;

          if(index===player.index){

            cars[index-1].shapeColor="red";
          
            
             
            
            

            camera.position.x=displayWidth/2;
            camera.position.y=cars[index-1].y;
           /* display_position=display_position+20;
            textSize(15);
            text(allPlayers[ptr].name+" "+allPlayers[ptr].distance,120,display_position);*/

          }

        }
      }
        if(keyIsDown(UP_ARROW)&& player.index!=null){
          player.distance=player.distance+50;
          player.update();
        }
        drawSprites();

      }
      async start(){

        if(gameState===0){
          player=new Player();
          var playercountref=await database.ref("playerCount").once("value");
          if(playercountref.exists()){
            playerCount=playercountref.val();
            player.getCount()
          }
          form=new Form();
          form.display();
        }

        car1 = createSprite(100,200);
        car1.addImage(carImg1);
        car2 = createSprite(300,200);
        car2.addImage(carImg2);
        car3 = createSprite(500,200);
        car3.addImage(carImg3);
        car4 = createSprite(700,200);
        car4.addImage(carImg4);

        cars=[car1,car2,car3,car4];

      }

    }
  


