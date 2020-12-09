class thug{

    constructor(x, y, width, height){
        var options = {
            isStatic: false,
            'restitution': 0.1, 
            'friction': 0.6, 
            'density': 0.8
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height 

        this.image = loadImage("Enemy.png");

        World.add(world, this.body);


    }


    display(){

        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        pop();



    }



}