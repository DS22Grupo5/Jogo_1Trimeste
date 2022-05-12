//ERRO: VELOCIDADE DO OBJETO
//FALTA: FINALIZAR OUTRAS ETAPAS DA FASE

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var posicao_oponente;

for(var i=0; i<9; i++){
    console.log('for')
    posicao = canvas.width - (500 + i)
    if(posicao % 5 == 0){
        console.log('teste')
        posicao_oponente = 500 + i
        break
    }
}

var y_atirar;
var atirar = false;
var x = 10;
var y = canvas.height - 211;
var x_oponente1 = canvas.width - posicao_oponente, x_oponente2 = 150;
var fator_soma = 5;
var x_tiro=5, y_tiro, colisao=false, cor_tiro = 'rgb(0, 0, 255)', x_atirar;
var fator_somaX = 0;
var y = canvas.height - 211
var personagem_direita, personagem_esquerda, pulo, num_pulo;
var cor_oponente1 = 'rgb(100, 100, 100)';
var plataforma = false;
var x_porta = canvas.width-550;
var cor_porta = "rgb(255, 255, 255)", porta_aberta=false;
var borda1 = 5, borda2 = canvas.width - 300
var colisao_oponente, colisao_tiro2
var cor_oponente2 = 'rgb(100, 100, 100)', oponente2_derrotado = false;
var x_bigboss = 10, y_bigboss = canvas.height-(0.6*canvas.height+200), luta_bigboss
var big_boss_acertado = 0; big_boss_derrotado = false;

var c = canvas.getContext('2d');

function CriarElementos(){
    c.fillStyle = 'rgb(0, 255, 0)';
    c.fillRect(5, canvas.height-111, canvas.width - 50, 30);

    c.fillStyle = 'rgb(255, 255, 0)';
    c.fillRect(5, canvas.height-0.6*canvas.height, (canvas.width-50), 30);

    //Porta metal
    c.fillStyle = cor_porta;
    c.fillRect(x_porta, canvas.height-0.6*canvas.height, canvas.width-1100, 30);
    
    c.fillStyle = cor_oponente1;
    c.fillRect(x_oponente1, canvas.height-201, 90, 90);

    //Big Boss
    c.fillStyle = 'rgb(0, 255, 100)';
    c.fillRect(x_bigboss, y_bigboss, 200, 200);

    c.fillStyle = 'rgb(255, 0, 0)';
    c.fillRect(x, y, 100,100);
}

function FatorSoma(){
    var fator_somaX = 5
    return fator_somaX;
}

function Pular(){
    if(x >= canvas.width - 650 && x <= canvas.width - 360 && plataforma == false){
        y = canvas.height-(0.6*canvas.height+100)
        plataforma = true;
    }  
    else{
        y = canvas.height-(0.6*canvas.height-100)
        setTimeout(function(){
            y = canvas.height-211

        },500)
    } 
    if(plataforma == true){
        y = canvas.height - (0.6*canvas.height+300)
        setTimeout(function(){
            y = canvas.height - (0.6*canvas.height+100)
        }, 500)
    }
}

function CriarNitanerBigBoss(){
    c.fillStyle = cor_oponente2;
    c.fillRect(x_oponente2, canvas.height-(0.6*canvas.height+90), 90, 90);

    x_oponente2 = x_oponente2 + 5
    
}

function AnimateCenario(){
    c.clearRect(0, 0, innerWidth, innerHeight)
    
    CriarElementos()
    
    requestAnimationFrame(AnimateCenario);

    if(atirar == true && plataforma == false){
       
        c.fillStyle = cor_tiro;
        c.fillRect(x_tiro, y_tiro, 20,20);
        console.log(x_tiro, x_oponente1)

        x_tiro=x_tiro+25 
        y_tiro = y_atirar;
        if(x_tiro == x_oponente1 || x_tiro == x_oponente1 - 5 || x_tiro == x_oponente1 + 5 || x_tiro == x_oponente1 - 10 || x_tiro == x_oponente1 + 10|| x_tiro == x_oponente1 - 15 || x_tiro == x_oponente1 + 15 || x_tiro == x_oponente1 - 20 || x_tiro == x_oponente1 + 20 || x_tiro == x_oponente1 - 25 || x_tiro == x_oponente1 + 25){
            colisao = true; 
            x_tiro = x
            atirar = false
        }
        
    }
    else if(atirar == true && plataforma == true){
        c.fillStyle = cor_tiro;
        c.fillRect(x_tiro, y_tiro, 20,20);
        console.log(x_tiro, x_oponente1)
    
        x_tiro=x_tiro-25
        y_tiro = y_atirar;
        if(x_tiro == x_oponente2 || x_tiro == x_oponente2 - 5 || x_tiro == x_oponente2 + 5 || x_tiro == x_oponente2 - 10 || x_tiro == x_oponente2 + 10|| x_tiro == x_oponente2 - 15 || x_tiro == x_oponente2 + 15 || x_tiro == x_oponente2 - 20 || x_tiro == x_oponente2 + 20 || x_tiro == x_oponente2 - 25 || x_tiro == x_oponente2 + 25){
            colisao_tiro2 = true; 
            x_tiro = x
            atirar = false
        }
        
    }
    if(luta_bigboss == true && atirar == true){
        c.fillStyle = cor_tiro;
        c.fillRect(x_tiro, y_tiro, 20,20);
        console.log(x_tiro, x_oponente1)
    
        x_tiro=x_tiro-25
        y_tiro = y_atirar;
        if(x_tiro == x_bigboss || x_tiro == x_bigboss - 5 || x_tiro == x_bigboss + 5 || x_tiro == x_bigboss - 10 || x_tiro == x_bigboss + 10|| x_tiro == x_bigboss - 15 || x_tiro == x_bigboss + 15 || x_tiro == x_bigboss - 20 || x_tiro == x_bigboss + 20 || x_tiro == x_bigboss - 25 || x_tiro == x_bigboss + 25){
            big_boss_acertado = big_boss_acertado+1
            if(big_boss_acertado == 2){
                big_boss_derrotado = true
                alert('big boss derrotado')
            }
            x_tiro = x
            atirar = false
        }
    }
    if((x == x_bigboss || x == x_bigboss - 5 || x == x_bigboss + 5 || x == x_bigboss - 10 || x == x_bigboss + 10|| x == x_bigboss - 15 || x == x_bigboss + 15 || x == x_bigboss - 20 || x == x_bigboss + 20 || x == x_bigboss - 25 || x == x_bigboss + 25) && plataforma == true && big_boss_derrotado == false){
        alert('Perdeu uma vida')
        location.reload()
    }
    if(colisao_tiro2 == true){
        cor_oponente2 = 'rgb(100, 150, 100)';
        oponente2_derrotado = true;
        alert('Chegou o momento de enfrentar o Francis, se ele te acertar você será derrotado, são necessários dois tiros de cura para derrotá-lo')

    }
    if(x_oponente2 >= canvas.width - 110 || colisao_tiro2 == true){
        luta_bigboss = true
        colisao_tiro2 = false
    }
    if(luta_bigboss == true){
        setTimeout(function(){
            x_bigboss = x_bigboss + 5;

        }, 2000)
    }
    if(oponente2_derrotado == false && plataforma==true){
        console.log('personagem não derrotado')
        if((x == x_oponente2 || x == x_oponente2 - 5 || x == x_oponente2 + 5) && y == canvas.height-600){
            console.log('colisão oponente')
            colisao_oponente = true
            personagem_direita = false
            personagem_esquerda = false
        }
    }
    if((x == x_oponente1 || x == x_oponente1 - 5 || x == x_oponente1 + 5) && y == canvas.height - 211){
        colisao_oponente = true
        personagem_direita = false
        personagem_esquerda = false
        x = 5
        x_oponente1 = canvas.width - posicao_oponente
    }
    if(colisao_oponente == true){
        alert('Perdeu uma vida')
        colisao_oponente = false
    }
    if(plataforma == true && y == canvas.height - 400 && x <= canvas.width - (canvas.width - 5)){
        y = canvas.height - 211;
        plataforma = false
    }
    if(plataforma == true){
        cor_porta = 'rgb(100, 100, 100)'
        y_atirar = canvas.height - (0.6*canvas.height+50)
        CriarNitanerBigBoss()
    }
    else if(plataforma == false){
        y_atirar = canvas.height - 161
    }
    
    if(colisao == true){
        cor_oponente1 = 'rgb(150, 255, 150)'
        x_oponente1 = x_oponente1
        setTimeout(function(){
            x_oponente1 = x_oponente1 + 10
        }, 500)
        
        x_porta = canvas.width - 550   
    }
    else{
        colisao = false
        if(x_oponente1 >= canvas.width - 110){
            fator_soma = -5;
        }
        else if(x_oponente1 <= 10){
            fator_soma = 5;
        }
    
        x_oponente1 = x_oponente1 + fator_soma;
        // cor_tiro = 'rgb(0, 0, 255)'
    }
    if(personagem_direita == true){

        c.fillStyle = 'rgb(255, 0, 0)';
        c.fillRect(x, y, 100,100);
        x=x+5;
        x_tiro=x
    }

    if(personagem_esquerda == true){
        c.fillStyle = 'rgb(255, 0, 0)';
        c.fillRect(x, y, 100,100);
        x=x-5;    
        x_tiro = x
    }
    if(pulo == true){
        Pular()  
        y_atirar = y+50     
    }
}

AnimateCenario()

document.addEventListener('keydown', keyRight, false)
document.addEventListener('keyup', keyRightSolta, false)

document.addEventListener('keydown', keySpace, false)
// document.addEventListener('keyup', keySpaceSolta, false)

document.addEventListener('keydown', keyLeft, false)
document.addEventListener('keyup', keyLeftSolta, false)

document.addEventListener('keydown', keyUp, false)
document.addEventListener('keyup', keyUpSolta, false)

function keyRight(e){
    if (e.keyCode == 39) {
        personagem_direita = true;
    }
}
function keyRightSolta(e){
    if (e.keyCode == 39) {
        personagem_direita = false;
    }
}
function keyLeft(e){
    if (e.keyCode == 37) {
        personagem_esquerda = true;

    }
    
}
function keyLeftSolta(e){
    if (e.keyCode == 37) {
        personagem_esquerda = false;
    }
    
}
function keyUp(e){
    if (e.keyCode == 38) {
        pulo = true;
    }

}
function keyUpSolta(e){
    if (e.keyCode == 38) {
        pulo = false;
    }

}
function keySpace(e){
    if (e.keyCode == 32) {
        atirar = true;
    }
    else{
        atirar = false;
    }
}


