class paper
{
    constructor()
    {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1
        }
        this.body = Bodies.circle(100,400,70,options);
        this.radius = 140,
        this.image = loadImage("paper.png")
        this.image.scale = 0.1;
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,this.radius);
        pop();      
    }
}