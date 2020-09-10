var rect1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine;
var world;
var ground;
var ball;

function setup(){
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world;
    var rofl = {
      isStatic: true
    }
    var lmao = {
      restitution: 1.0

    }


    ball = Bodies.circle(200, 50, 20, lmao);
    World.add(world, ball);  
    ground = Bodies.rectangle(200, 380, 400, 20, rofl);
    World.add(world, ground);
    

    console.log(ground.label);
 }
function draw(){
  background("blue");  
    Engine.update(engine);



    rectMode(CENTER);
    rect (ground.position.x, ground.position.y, 400, 20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}