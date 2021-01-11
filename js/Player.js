class Player{


    constructor()
    {
        this.name=null;
        this.index=null;
        this.distance=0;

    }
    getCount() //getting the playercount from the database
    {
var playercountref=database.ref("playerCount");
playercountref.on("value",(data)=>{
playerCount=data.val();
});

    }
   
   
    updateCount(count) //updating the playercount to database
    {
        database.ref('/').update({
            playerCount:count
        });
           
    }



    
    update() // updating name
    {
      
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })

    }
     static getPlayerInfo(){

        var playerInforef=database.ref('players');
        playerInforef.on("value",(data)=>{
        allPlayers=data.val()});

    }
}

