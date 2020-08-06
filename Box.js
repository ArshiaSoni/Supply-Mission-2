class Box {
    constructor(x, y, w, h){
        var options= {
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }
    display(){
        
        rectMode(CENTER);
        fill ("red"); 
        rect( this.body.position.x, this.body.position.y , this.width, this.height);
     }
}