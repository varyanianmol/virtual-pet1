var happyDogimg,dog,foodS,foodStock,database,dogimg,happydog;

function preload()
{
dogimg=loadImage("images/dogImg.png");
happyDogimg=loadImage("images/dogImg1.png");

}

function setup() {
  database=firebase.database();
  createCanvas(500,500);
  

  dog=createSprite(250,350,10,60);
dog.addImage(dogimg)
dog.scale=0.15
  
  foodStock=database.ref('Food');
 // foodStock.set(20);
  foodStock.on("value",readStock);
  textSize(20);
}

function draw() {  
background("green");

if(keyWentDown(UP_ARROW))
{
writeStock(foodS)
dog.addImage(happyDogimg);
}  
drawSprites()

textSize(20);
fill("white")
text("Note:Press UP Arrow To Feed Drago",130,10,300,20);
text("Food remaining : "+foodS,170,200);

}
function readStock(data){

foodS=data.val();  
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}
  























