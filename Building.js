class building{

    constructor(x,y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Building.png");

        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,  pos.x, pos.y, this.width, this.height);
        Matter.Body.setPosition(this.body, {x: pos.x-1, y: pos.y});

      }



}