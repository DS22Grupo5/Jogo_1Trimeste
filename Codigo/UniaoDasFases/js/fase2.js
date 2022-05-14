// VARIÁVES CANVAS

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');


try {

  var Altura = window.innerHeight
  var Largura = window.innerWidth

}

catch {
  
  var Largura = 1366
  var Altura = 657

}

// VARIÁVEIS NITANER 
var andar_nitaner = (Largura) * 0.146
var velocidade_nitaner = 4

// VARIÁVEIS DO TECLADO 
var andar_direita = false
var andar_esquerda = false

// VARIÁVEIS PERSONAGENS
var andar_personagem = 0
var velocidade_pers = 6
var altura_personagem = (Altura) * 0.342
var lado_pers = (Largura) * 0.054
var cor_pers = "white"

// VARIÁVEIS FASE
var fase_completa = false


function ObjEst() {
  // CRIANDO OBJETOS ESTÁTICOS

  ctx.fillStyle = '#7b7bb7'; // COR DO NITANER
  ctx.fillRect(andar_nitaner, (Altura) * 0.837, (Largura) * 0.036, (Altura) * 0.159); //NITANER

  ctx.fillStyle = cor_pers; // COR DO PERSONAGEM PRINCIPAL
  ctx.fillRect(andar_personagem, altura_personagem, lado_pers, (Altura) * 0.114); //PERSONAGEM PRINCIPAL

  ctx.fillStyle = '#4F2729'; // COR DO PRÉDIO 1
  ctx.fillRect(0, (Altura) * 0.456, (Largura) * 0.183, (Altura) * 0.030); //PRÉDIO 1 

  ctx.fillStyle = '#54452C'; // COR DO PRÉDIO 2
  ctx.fillRect((Largura) * 0.198, (Altura) * 0.509, (Largura) * 0.128, (Altura) * 0.038); //PRÉDIO 2

  ctx.fillStyle = '#380103'; // COR DO PRÉDIO 3, ONDE O PERSONAGEM ENTRA
  ctx.fillRect((Largura) * 0.360, (Altura) * 0.380, (Largura) * 0.164, (Altura) * 0.053); //PRÉDIO 3, ONDE O PERSONAGEM ENTRA 

  ctx.fillStyle = '#40425F'; // COR DA LOJA 
  ctx.fillRect((Largura) * 0.551, (Altura) * 0.608, (Largura) * 0.237, (Altura) * 0.068); //LOJA 

  ctx.fillStyle = '#80776A'; // COR DO PRÉDIO 4, Ñ TERÁ INTERAÇÃO
  ctx.fillRect((Largura) * 0.870, (Altura) * 0.152, (Largura) * 0.219, (Altura) * 0.015); // PRÉDIO 4, Ñ HAVERÁ INTERAÇÃO
}


// FUNÇÃO QUE ANIMA QUALQUER COISA QUE ESTÁ NO CANVAS
function CenarioAnimado() {

  if ((andar_personagem < (Largura) * 0.182) && (parseInt(altura_personagem) == parseInt((Altura) * 0.395))) {
    andar_esquerda = false
  }

  ctx.clearRect(0, 0, innerWidth, innerHeight)
  requestAnimationFrame(CenarioAnimado)

  if ((andar_nitaner + (Largura) * 0.146) > innerWidth) {
    velocidade_nitaner = -velocidade_nitaner
  }
  else if (andar_nitaner < 0) {
    velocidade_nitaner = -velocidade_nitaner
  }
  andar_nitaner = andar_nitaner + velocidade_nitaner;

  if (andar_personagem > (Largura) * 0.179) {
    altura_personagem = (Altura) * 0.395 // IMPORTANTE PARA COLOCAR A ALTURA DA PLATAFORMA VERMELHA
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    ctx.fillStyle = cor_pers; // COR DO PERSONAGEM PRINCIPAL
    ctx.fillRect(andar_personagem, altura_personagem, (Largura) * 0.054, (Altura) * 0.114); //PERSONAGEM PRINCIPAL

  }


  if (andar_personagem > (Largura) * 0.292) {
    altura_personagem = (Altura) * 0.266
  }

  if (andar_personagem > (Largura) * 0.497) {
    altura_personagem = (Altura) * 0.494

  }

  if (andar_personagem > (Largura)*0.585 && fase_completa == false) {
    alert("Você passou de fase!")
    fase_completa = true
    andar_direita = false
    cor_pers = 'transparent'
    window.location.href = 'comecar_fase3.html'
    
  }

  if (andar_direita == true) {
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    ctx.fillStyle = cor_pers; // COR DO PERSONAGEM PRINCIPAL
    ctx.fillRect(andar_personagem, altura_personagem, (Largura) * 0.054, (Altura) * 0.114); //PERSONAGEM PRINCIPAL
    andar_personagem = andar_personagem + velocidade_pers;
    


  }



  if (andar_direita == false) {
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    ctx.fillStyle = cor_pers; // COR DO PERSONAGEM PRINCIPAL
    ctx.fillRect(andar_personagem, altura_personagem, (Largura) * 0.054, (Altura) * 0.114); //PERSONAGEM PRINCIPAL

  }

  if (andar_esquerda == true) {
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    ctx.fillStyle = cor_pers; // COR DO PERSONAGEM PRINCIPAL
    ctx.fillRect(andar_personagem, altura_personagem, (Largura) * 0.054, (Altura) * 0.114); //PERSONAGEM PRINCIPAL
    andar_personagem = andar_personagem - velocidade_pers;

  }


  if (andar_esquerda == false) {
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    ctx.fillStyle = cor_pers; // COR DO PERSONAGEM PRINCIPAL
    ctx.fillRect(andar_personagem, altura_personagem, (Largura) * 0.054, (Altura) * 0.114); //PERSONAGEM PRINCIPAL


  }



  ObjEst()


}

CenarioAnimado()


// COMANDOS QUE HABILITAM AS SETAS DIREITA E ESQUERDA
document.addEventListener('keydown', BotaoDireita, false)
document.addEventListener('keyup', BotaoDireitaSolto, false)

document.addEventListener('keydown', BotaoEsquerda, false)
document.addEventListener('keyup', BotaoEsquerdaSolto, false)


function BotaoDireita(e) {
  if (e.keyCode == 39) {
    andar_direita = true;
  }
}

function BotaoDireitaSolto(e) {
  if (e.keyCode == 39) {
    andar_direita = false;
  }
}

function BotaoEsquerda(e) {
  if (e.keyCode == 37) {
    andar_esquerda = true;

  }
}

function BotaoEsquerdaSolto(e) {
  if (e.keyCode == 37) {
    andar_esquerda = false;

  }
}