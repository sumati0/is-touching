var a,b
function setup(){
  createCanvas(1200,800);
  a=createSprite(400, 200, 50, 80);
  b=createSprite(600,200,80,30);
  a.shapeColor="cyan";
  b.shapeColor="black"
}

function draw() {
  background("pink"); 
  a.x=World.mouseX;
  a.y=World.mouseY;
  console.log(a.y-b.y)
  if(a.x-b.x<=a.width/2+b.width/2 &&b.x-a.x<=a.width/2+b.width/2 && 
    a.y-b.y<=a.height/2+b.height/2 && b.y-a.y<=a.height/2+b.height/2){
      a.shapeColor="yellow"
      b.shapeColor="yellow"
    }
else{
  a.shapeColor="cyan";
  b.shapeColor="black";
}
  drawSprites();
}