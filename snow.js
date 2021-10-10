class Snow {
    constructor() {
        var options={
            isStatic:false 
        }
        this.body = Bodies.rectangle(random(0,800), 10,10,10,options);
        this.snowImg=loadImage("snow4.webp")
        World.add(world,this.body)
    }
    display() {

        var pos = this.body.position;

        push();
        imageMode(CENTER);
        image(this.snowImg,pos.x,pos.y,50,50)
        pop();
    }

};