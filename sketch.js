var form, game, player;

var gameState = "START";

var knight, knightRun, knightIdle;

var bg, bgIm, bgIm2, bgIm3, bgIm4;

var floor;

var keyS = false;

var monsters;

var startbg, endbg

var voice, story, storyIm

var dragonRoar, fireballImage, cageIm,  princessIm

var mountain, cage, princess

var click


// monster variables:
var hyenaIm;
var vultureIm;
var deceasedIm;
var scorpioIm;
var mummyIm;

var dragon, dragonIm


var obsImage

var swordImage, swordswoosh, swordGroup

var lives = 5
var kills = 0
var level = 1

var hurt, hit
var intromusic, playmusic

function preload() {

click = loadSound("sounds/click.wav")

cageIm = loadImage("images/cage.png")

princessIm = loadImage("images/Princess/princess1.png","images/Princess/princess2.png", "images/Princess/princess3.png","images/Princess/princess4.png","images/Princess/princess5.png",)

  knightRun = loadAnimation("images/Knight/Run (1).png", "images/Knight/Run (2).png", "images/Knight/Run (3).png", "images/Knight/Run (4).png",
    "images/Knight/Run (5).png", "images/Knight/Run (6).png", "images/Knight/Run (7).png", "images/Knight/Run (8).png", "images/Knight/Run (9).png",
    "images/Knight/Run (10).png")

  knightIdle = loadAnimation("images/Knight/Idle (1).png", "images/Knight/Idle (2).png", "images/Knight/Idle (3).png", "images/Knight/Idle (4).png",
    "images/Knight/Idle (5).png", "images/Knight/Idle (6).png", "images/Knight/Idle (7).png", "images/Knight/Idle (8).png", "images/Knight/Idle (9).png",
    "images/Knight/Idle (10).png")

  bgIm = loadImage("images/bg9.png");
  bgIm2 = loadImage("images/bg1.png");
  bgIm3 = loadImage("images/bg10.png");
  bgIm4 = loadImage("images/bg5.jpg");

  fireballImage = loadImage("images/fireball-im.png")

  hurt = loadSound("sounds/hurtSound.wav")
  hit = loadSound("sounds/hit.mp3")

 

  dragonRoar = loadSound("sounds/roar.mp3")

  voice = loadSound("sounds/Voice.mp3")
  storyIm = loadImage("images/story.png")

  intromusic = loadSound("sounds/BackgroundMusic.mp3")
  playmusic = loadSound("sounds/playingMusic.mp3")

  startbg = loadImage("images/backgroundStart.jpg")
  endbg = loadImage("images/GameOverBackground.jpg")

  swordImage = loadImage("images/Sword2.png")
  swordswoosh = loadSound("sounds/SwordSwoosh.wav")

  obsImage = loadImage("images/obstacle.png")

  dragonIm = loadAnimation("images/Dragon/dragonFly1.png", "images/Dragon/dragonFly2.png","images/Dragon/dragonFly3.png","images/Dragon/dragonFly4.png",)

  // monster images
  hyenaIm = loadAnimation("images/Hyena/hyenaWalk1.png", "images/Hyena/hyenaWalk2.png", "images/Hyena/hyenaWalk3.png", "images/Hyena/hyenaWalk4.png", "images/Hyena/hyenaWalk5.png", "images/Hyena/hyenaWalk6.png");
  vultureIm = loadAnimation("images/Vulture/vultureWalk1.png", "images/Vulture/vultureWalk2.png", "images/Vulture/vultureWalk3.png", "images/Vulture/vultureWalk4.png");
  deceasedIm = loadAnimation("images/Deceased/deceasedWalk1.png", "images/Deceased/deceasedWalk2.png", "images/Deceased/deceasedWalk3.png", "images/Deceased/deceasedWalk4.png", "images/Deceased/deceasedWalk5.png", "images/Deceased/deceasedWalk6.png",);
  scorpioIm = loadAnimation("images/Scorpio/scorpioWalk1.png", "images/Scorpio/scorpioWalk2.png", "images/Scorpio/scorpioWalk3.png", "images/Scorpio/scorpioWalk4.png",);
  mummyIm = loadAnimation("images/Mummy/mummyWalk1.png", "images/Mummy/mummyWalk2.png", "images/Mummy/mummyWalk3.png", "images/Mummy/mummyWalk4.png", "images/Mummy/mummyWalk5.png", "images/Mummy/mummyWalk5.png", "images/Mummy/mummyWalk6.png",);
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  monsters = new Group();
  swordGroup = new Group();


  game = new Game();
  game.start();

}

function draw() {


  if (gameState === "PLAY") {
    game.play();
  }



}




/*

  add dragon sounds
  improve fireball(add animation)
  if i can find princess animation if cant find image
  maybe more sounds

   */


   // button properties:

//this.singlePlrButtom.size(100,100);
// this.singlePlrButtom.style("font-family", "Bodoni");
  //this.singlePlrButtom.style("font-size", "48px");
   //this.singlePlrButtom.style('color', '#ff0000'); 
   //let col = color(25, 23, 200, 50);
   // this.singlePlrButtom.style('background-color', col);
