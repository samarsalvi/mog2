var PLAY = 0;
var END = 1;
var gameState = PLAY;
var ground
var bg , wolf, bear, pball, rstone
var neptune, nepimg
var bgimg, fireimg
var ground, fire
var wolf, wolfimg
var bear, bearimg

//score = 0;

function preload(){

bgimg = loadAnimation("icebg.gif")
nepimg = loadAnimation("1.png", "2.png" , "3.png", "4.png", "5.png", "6.png", "7.png" , "8.png", "9.png", "10.png")
gemimg =loadImage("Gem-red.png")
fireimg = loadAnimation("firee.gif")
wolfimg = loadImage("wolf.png")
bearimg = loadAnimation("b1.png", "b2.png", "b3.png","b4.png", "b5.png" )

}

function setup(){
    createCanvas(800, 400)

    bg = createSprite(450, 150)
    bg.addAnimation("moving" , bgimg)
    bg.scale =1.4

    neptune = createSprite(160, 280, 20, 20)
    neptune.addAnimation("running", nepimg)
    neptune.scale = 0.6

    ground = createSprite(0, 370, 1600, 20)
    ground.visible = false;





    gemGroup = new Group();


}

function draw(){
    background("cyan");
    //console.log(neptune.y)

    if(keyDown("space")&& neptune.y>150){
        neptune.velocityY = -10

    }
    neptune.velocityY = neptune.velocityY+0.8
    neptune.collide(ground)



    gemspawn()
    spawnmonsters()
    drawSprites();

    text("X"+mouseX+","+"Y"+mouseY, mouseX, mouseY)

    
}

function gemspawn() {
   
    if (frameCount % 250 === 0) {
      var gem = createSprite(600,120,40,10);
      gem.y = Math.round(random(80,120));
      gem.x = Math.round(random(700, 750));
      gem.addImage(gemimg);
      gem.scale = 0.5;
      gem.velocityX = -3;
      
       
      gem.lifetime = 300;
     
      gemGroup.add(gem);
      gem.scale = 0.09
    }
    if (frameCount % 522 === 0){
        var fire = createSprite( 760, 360, 20, 20 )
         fire.velocityX = -2
        fire.addAnimation("burning", fireimg)
        fire.scale= 0.12

    }

}

function spawnmonsters(){
   if(  frameCount% 200 === 0 ) {
    
    var monster = createSprite(800, 270, 50, 50)
    monster.velocityX = -3
    monster.addAnimation("growling", bearimg)
    monster.scale = 0.7

   }
}




















































