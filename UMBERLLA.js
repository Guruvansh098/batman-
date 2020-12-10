class Umberlla{
constructor(x,y){
    var options={
        isStatic:true
    }
    this.image=loadImage(walking_1.png)
    this.body=Bodies.circle(x.y,50,options)
    this.radius=50
    World.add(world,this.body)
}
display(){
    var pos=this.body.position
    imageMode(CENTRE)
    Image(this.image,pos.x,pos.y+70,300,300)
}
}