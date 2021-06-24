var canvas, backgroundImg;

var guardian, alien, beam, treasure;

function preload(){
alienImg = loadImage("alien.png");
guardianImg = loadImage("girl.png");
beamImg = loadImage("beam.png");
treasureImg = loadImage("treasure.png");
backgroundImg = loadImage("bg.png");
}

function setup(){
  canvas = createCanvas(1500, 1200);

  guardian = createSprite(1150, 700);
  guardian.addImage(guardianImg);
  guardian.scale = 0.8; 

  treasure = createSprite(1400, 750);
  treasure.addImage(treasureImg);
  treasure.scale = 0.5; 

  alien = createSprite(280, 700);
  alien.addImage(alienImg);
  alien.scale = 0.5; 

}

function draw(){
background(backgroundImg);


drawSprites();
}