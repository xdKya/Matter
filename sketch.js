//mundo fisico
const World = Matter.World;
//mecanismo fisico
const Engine = Matter.Engine;
//corpos fisicos, objetos
const Bodies = Matter.Bodies;

var engine, world;
var objeto;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world  = engine.world;

  var objeto_options = {
    isStatic: true
    
  };

  objeto = Bodies.rectangle(200,200,50,50,objeto_options);
  World.add(world,objeto);

  console.log(objeto);
  
}

function draw() {
  background(255,255,255);  

  rectMode(CENTER);
  Engine.update(engine);
  rect(objeto.position.x,objeto.position.y,50,50);
}