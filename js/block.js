/*class Block  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        

        World.add(world,this.body)

    }
    display()  {
        
        
        rectMode(CENTER)
        
        rect(this.body.position.x,this.body.position.y,this.width,this.height)

    }
}*/



class Block  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false
        }
        this.Visibility = 155;
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        

        World.add(world,this.body)

    }
    display()  {
        if(this.body.speed < 5)  {
            var angle = this.body.angle
            var pos = this.body.position
            push()
            translate(pos.x,pos.y)
            rotate(angle)
            rectMode(CENTER)
            rect(0,0,this.width,this.height)
            pop()
        }
        
         else {
            World.remove(world,this.body)
            push()
            this.Visibility = this.Visibility-10;
            pop()
        }

    } 
}
