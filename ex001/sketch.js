let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = 15 / 2;

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let xRaqueteOp = 585
let yRaqueteOp = 150;
let velocidadeyOp;

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
  mostraRaquete(xRaquete, yRaquete);
  mostraRaqueteOponente(xRaqueteOp, yRaqueteOp);
  movimentaRaquete();
  verificaColisaoRaquete();
  movimentaRaqueteOp();
  
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

function mostraRaquete(x,y){
  rect(x,y,raqueteComprimento, raqueteAltura);
}

function mostraRaqueteOponente(x,y){
  rect(x,y, raqueteComprimento, raqueteAltura);
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

function movimentaRaqueteOp(){
  
  velocidadeyOp = yBolinha - yRaqueteOp - raqueteComprimento / 2 -30;
  yRaqueteOp += velocidadeyOp;
  
}