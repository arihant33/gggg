var tower,hero,bad1,bad2,ob,ob2,ob4;
function setup(){
    createCanvas(400,400)
tower = createSprite(100,100,600,600)
tower.shapeColor="black"
hero=createSprite(20,380,50,50)
hero.shapeColor="yellow"
bad1=createSprite(370,370,60,60)    
bad2=createSprite(370,370,60,60)

ob= createSprite(70,80,40,40)
ob.shapeColor="red"

ob2= createSprite(70,80,40,40)
ob.shapeColor="red"

ob4= createSprite(70,80,40,40)
ob.shapeColor="red"

}
function draw(){
if(frameCount%50==0){
    var ob=createSprite(random(0,500),-10,40,40);
    ob.velocityY=5;
}

if(frameCount%70==0){
    var ob2=createSprite(random(0,500),-10,40,40);
    ob2.velocityY=5;
}
if(frameCount%30==0){
    var ob4=createSprite(random(0,500),-10,40,40);
   ob4. shapeColor="green";
    ob4.velocityY=5;
}

    drawSprites()
}