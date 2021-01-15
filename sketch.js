var canvas;
var music;
var block1,block2,block3,block4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
     
    //create 4 different surfaces
    block1 = createSprite(40,590,170,25);
    block1.shapeColor = "blue";
     
    block2 = createSprite(230,590,170,25);
    block2.shapeColor = "orange";

    block3 = createSprite(420,590,170,25);
    block3.shapeColor = "purple";
             
    block4 = createSprite(620,590,170,25);
    block4.shapeColor = "green";

    //create box sprite and give velocity
    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    ball.bounceOff(edges);
            
    //add condition to check if box touching surface and make it box
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = rgb(153,0,76);
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = rgb(0,100,0);
    }
     drawSprites();    
}
