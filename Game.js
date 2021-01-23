class Game{

    constructor()
    {

    }

    getState()
    {
            database.ref("Gamestate").on("value", function(data){
                gamestate = data.val();
            })
    }

    updateState(state)
    {
            database.ref("/").update({
                    Gamestate: state
            })
    }

    start()
    {
            if(gamestate == 0)
            {
                player = new Player();
                player.getCount();
                form = new Form();
                form.display();
            }
            car1 = createSprite(200, 200);
            car2 = createSprite(400, 200);
            car3 = createSprite(600, 200);
            car4 = createSprite(800, 200);
            cars = [car1, car2, car3, car4];
            car1.addImage(carImg1);
            car2.addImage(carImg2);
            car3.addImage(carImg3);
            car4.addImage(carImg4);
    }

    play()
    {
            background(rgb(64, 60, 69));
            image(track, 0, -displayHeight*4, displayWidth, displayHeight*5);
            player.getPlayerInfo();
            form.greeting.hide();
            var y;
            var x = 200;
            var index = 0;
            player.getCarsAtEnd();
            for(var i in allPlayers)
            {
                
                y = windowHeight - allPlayers[i].Distance;
                x = x + 200;
                cars[index].x = x;
                cars[index].y = y;
                
                if(i == "Player" + player.index)
                {
                    cars[index].shapeColor = "red";
                    camera.position.y = cars[index].y;
                    text(player.name, x, y + 100);
                }
                index = index + 1;
            }

            if(keyDown(UP_ARROW) && player.index != null)
            {
                    player.distance = player.distance + 30;
                    player.update();
            }
            if(player.distance > 4300)
            {
                    gamestate = 2;
                    player.rank++;
                    player.updateCarsAtEnd(player.rank);
                    console.log(player.rank);
                   
            }
            drawSprites();

    }
    
    end()
    {
            console.log("Game has Ended");
    }
}