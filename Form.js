class Form
{
    constructor()
    {
        this.title = createElement("h2");
        this.input = createInput("Name");
        this.button = createButton("play");
        this.greeting = createElement("h3");

    }

    display()
    {
            
            this.title.position(width/2 - 40, 0);
            this.title.html("Car Racing Game");
            this.input.position(width/2 - 40, height/2 - 80);
            this.button.position(width/2 + 30, height/2);
            this.button.mousePressed(()=>{
                this.input.hide();
                this.button.hide();
                player.name = this.input.value();
                playerCount++;
                player.index = playerCount;
                player.updateCount(playerCount);
                player.update();
                this.greeting.position(width/2 - 70, height/4)
                this.greeting.html("Hello " + player.name);
            })
    }
}