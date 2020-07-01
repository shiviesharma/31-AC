class divisions {
    constructor(x, y, w, h){
        var options = {
            isStatic : true
        }
        this.body = bpdies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        AudioWorkletNode.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
}