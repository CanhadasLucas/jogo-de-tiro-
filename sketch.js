var arma; 
var balaoVermelho;
var balaoVerde;
var quintal;
var gota;
var bg;

function preload(){
    arma = loadImage("assets/arma.png");
    balaoVermelho = loadImage("aseets/balao vermelho.jpg");
    balaoVerde = loadImage("assets/balao verde.png");
    gota = loadImage("assets/gota.png");
    quintal = loadImage("assets/quintal.jpg")
}

function setup(){
    createCanvas(windowWidth, windowHeight);
//    bg = createSprite(0,0, windowWidth, windowHeight);
//    bg.addImage(quintal);
}

function draw(){
    background(0);
//    image(quintal, 0, 0, windowWidth, windowHeight)
}

