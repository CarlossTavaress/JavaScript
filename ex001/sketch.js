let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = 15 / 2;

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let velocidadexBolinha = 5;
let velocidadeyBolinha = 5;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0); 
  mostraBolinha(); 
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaRaquete();
  verificaColisaoRaquete();
  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisaoBorda(){
  
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadexBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }  
  
}

function mostraRaquete(){
  rect(xRaquete,yRaquete,raqueteComprimento, raqueteAltura);
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if(xBolinha - raio < raqueteComprimento + xRaquete && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;   
  }
}