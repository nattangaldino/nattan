function draw() {
  background(220);
  mostrabolinha();
  movimentobolinha()
  verificaColisaoBorda()
}

function mostrabolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentobolinha(){
xBolinha+=velocidadeXBolinha;
yBolinha+=velocidadeYBolinha;

}

function verificaColisaoBorda(){
  if(xBolinha>width || xBolinha<0){
  velocidadeXBolinha*=-1;
  
}
if(yBolinha>height || yBolinha<0){
  velocidadeYBolinha*=-1;
  
}
}
