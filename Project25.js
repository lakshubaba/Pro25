class dustbin
{
    constructor()
    {
        var options = {isStatic: true};

        this.LeftSide = Bodies.rectangle(400,560,20,160,options);
        this.LRwidth = 20;
        this.LRheight = 160;
        World.add(world, this.LeftSide);

        this.base = Bodies.rectangle(525,630,230,20,options);
        this.Bwidth = 230;
        this.Bheight = 20;
        World.add(world, this.base);

        this.RightSide = Bodies.rectangle(650,560,20,160,options);
        World.add(world, this.RightSide);

        this.image=loadImage("dustbingreen.png");

    }
    display()
    {
        var posL = this.LeftSide.position;
        fill('white');
        rect(posL.x, posL.y, this.LRwidth, this.LRheight);

        var posB = this.base.position;
        fill('white');
        rect(posB.x, posB.y, this.Bwidth, this.Bheight);

        var posR = this.RightSide.position;
        fill('white');
        rect(posR.x, posR.y, this.LRwidth, this.LRheight);

        imageMode(CENTER);
        image(this.image, posB.x, posL.y, this.Bwidth + 3 * this.LRwidth, this.LRheight);
    }
}