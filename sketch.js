var movingrect, fixedrect;
var movingrect1, fixedrect1;
var gameobject1, gameobject2, gameobject3, gameobject4;




function setup() {


  createCanvas(1200,800);
  movingrect=createSprite(600, 400, 50, 80);
  movingrect.shapeColor="green";
gameobject1=createSprite(100,100,50,50);
gameobject1.shapeColor="green";
gameobject2=createSprite(300,100,50,50);
gameobject2.shapeColor="green";
gameobject3=createSprite(500,100,50,50);
gameobject3.shapeColor="green";
gameobject4=createSprite(700,100,50,50);
gameobject4.shapeColor="green";










 
 fixedrect1=createSprite(1000,100,50,80)
fixedrect1.shapeColor="blue";
movingrect1=createSprite(1000,800,80,30)
movingrect1.shapeColor="blue";

movingrect1.velocityY=-5;
fixedrect1.velocityY=5;


}

function draw() {
  background("black"); 
  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(isTouching(movingrect,gameobject1)===true ){
movingrect.shapeColor="red";
gameobject1.shapeColor="blue"

  }

  else{
    movingrect.shapeColor="green"       
    gameobject1.shapeColor="green"
  }
  
  
bounceOff(movingrect1,fixedrect1)

  drawSprites();
}

