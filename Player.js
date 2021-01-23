class Player
{
        constructor()
        {
                this.distance = 0;
                this.rank = 0;
                this.name = null;
                this.index = null;
        }

        getCount()
        {
                database.ref("PlayerCount").on("value", function(data){
                    playerCount = data.val();
                })
        }

        updateCount(count)
        {
                database.ref("/").update({
                    PlayerCount : count
                })
        }

        update()
        {
                var playerIndex = "Players/Player" + this.index;
                database.ref(playerIndex).set({
                    Name : this.name,
                    Distance : this.distance
                })
        }

        getPlayerInfo()
        {
                database.ref("Players").on("value", (data)=>{
                        allPlayers = data.val();
                })
        }

        getCarsAtEnd()
        {
                database.ref("CarsAtEnd").on("value", (data)=>{
                        this.rank = data.val();
                })
        }

        updateCarsAtEnd(rank)
        {
                database.ref("/").update({
                        CarsAtEnd : rank
                })
        }
}