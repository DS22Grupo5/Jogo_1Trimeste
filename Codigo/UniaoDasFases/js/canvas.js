var canvas = document.querySelector('canvas');

try{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
}
catch{
    canvas.width = 1325;
    canvas.height = 627;

}

var posicao_oponente;

for(var i=0; i<9; i++){
    posicao = canvas.width - (500 + i)
    if(posicao % 5 == 0){
        posicao_oponente = 500 + i
        break
    }
}

//Variaveis de posicionamento

var y_atirar, x = 10, y = canvas.height - 211, x_oponente1 = canvas.width - posicao_oponente, x_oponente2 = 150, x_atirar, borda2,
    x_tiro=5, y_tiro, x_porta = canvas.width-550, borda1 = 5, x_bigboss = 10, y_bigboss = canvas.height-(0.6*canvas.height+200), subtracao;


function LimiteBorda2(){
    if((0.26*canvas.width)%5 != 0){
        subtracao = 0.26*canvas.width - ((0.26*canvas.width)%5)
    }
    borda2=canvas.width-(posicao_oponente-subtracao)
}

LimiteBorda2()

//VARIÁVEIS DE DECISÃO
var luta_bigboss=false, atirar = false, colisao_tiro1=false , personagem_direita=false, personagem_esquerda=false, pulo=false, plataforma = false, vida=0,
    porta_aberta=false, colisao_oponente, colisao_tiro2=false, oponente2_derrotado = false, big_boss_derrotado = false, big_boss_acertado = false;

//VARIÁVEIS DE COR

var cor_tiro = 'rgb(0, 0, 255)',cor_oponente1 = '#7b7bb7',   
    cor_porta = "#ffffff70", cor_oponente2 = '#7b7bb7';
 
var fator_soma = 5;
var vida = 0;

var c = canvas.getContext('2d');

function CriarElementos(){
    //PLATAFORMAS
    c.fillStyle = '#a900eb';
    c.fillRect(5, canvas.height-111, canvas.width - 50, 30);

    c.fillStyle = '#a900eb'
    c.fillRect(5, canvas.height-0.6*canvas.height, (canvas.width-50), 30);

    //PORTA
    c.fillStyle = cor_porta;
    c.fillRect(x_porta, canvas.height-0.6*canvas.height, canvas.width-1100, 30);
    
    c.fillStyle = cor_oponente1;
    c.fillRect(x_oponente1, canvas.height-201, 90, 90);

    //Big Boss
    c.fillStyle = 'rgb(0, 0, 255)';
    c.fillRect(x_bigboss, y_bigboss, 200, 200);

    c.fillStyle = 'rgb(255, 255, 255)';
    c.fillRect(x, y, 100,100);


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

    if(x==borda1){
        personagem_esquerda=false;
    }else if(x==borda2 || x==borda2+5 || x==borda2-5){
        personagem_direita=false;

    }

    if(atirar == true && plataforma == false){
       
        c.fillStyle = cor_tiro;
        c.fillRect(x_tiro, y_tiro, 20,20);

        x_tiro=x_tiro+25 
        y_tiro = y_atirar;
        if(x_tiro == x_oponente1 || x_tiro == x_oponente1 - 5 || x_tiro == x_oponente1 + 5 || x_tiro == x_oponente1 - 10 || x_tiro == x_oponente1 + 10|| x_tiro == x_oponente1 - 15 || x_tiro == x_oponente1 + 15 || x_tiro == x_oponente1 - 20 || x_tiro == x_oponente1 + 20 || x_tiro == x_oponente1 - 25 || x_tiro == x_oponente1 + 25){
            colisao_tiro1 = true; 
            x_tiro = x
            atirar = false 
        }
        
    }
    else if(atirar == true && plataforma == true){
        c.fillStyle = cor_tiro;
        c.fillRect(x_tiro, y_tiro, 20,20);
    
        x_tiro=x_tiro-25
        y_tiro = y_atirar;
        if(x_tiro == x_oponente2 || x_tiro == x_oponente2 - 5 || x_tiro == x_oponente2 + 5 || x_tiro == x_oponente2 - 10 || x_tiro == x_oponente2 + 10|| x_tiro == x_oponente2 - 15 || x_tiro == x_oponente2 + 15 || x_tiro == x_oponente2 - 20 || x_tiro == x_oponente2 + 20 || x_tiro == x_oponente2 - 25 || x_tiro == x_oponente2 + 25){
            colisao_tiro2 = true; 
            x_tiro = x
            atirar = false
            cor_oponente2 = 'rgb(100, 150, 100)';
            oponente2_derrotado = true;
            alert('Chegou o momento de enfrentar o Francis, se ele te acertar você será derrotado, são necessários dois tiros de cura para derrotá-lo')
    
        }
        
    }
    if(luta_bigboss == true && atirar == true){
        c.fillStyle = cor_tiro;
        c.fillRect(x_tiro, y_tiro, 20,20);
    
        x_tiro=x_tiro-25
        y_tiro = y_atirar;
        if(x_tiro == x_bigboss || x_tiro == x_bigboss - 5 || x_tiro == x_bigboss + 5 || x_tiro == x_bigboss - 10 || x_tiro == x_bigboss + 10|| x_tiro == x_bigboss - 15 || x_tiro == x_bigboss + 15 || x_tiro == x_bigboss - 20 || x_tiro == x_bigboss + 20 || x_tiro == x_bigboss - 25 || x_tiro == x_bigboss + 25){
            big_boss_acertado = big_boss_acertado+1
            x_tiro = x
            atirar = false
            if(big_boss_acertado == 2){
                big_boss_derrotado = true
                alert('Francis derrotado')
                window.location.href = 'voltar_menu.html'
            }
            
        }
    }
    if((x == x_bigboss || x == x_bigboss - 5 || x == x_bigboss + 5 || x == x_bigboss - 10 || x == x_bigboss + 10|| x == x_bigboss - 15 || x == x_bigboss + 15 || x == x_bigboss - 20 || x == x_bigboss + 20 || x == x_bigboss - 25 || x == x_bigboss + 25) && plataforma == true && big_boss_derrotado == false){
        alert('Ah não, você foi derrotado pelo Francis')
        location.reload()
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
        if((x == x_oponente2 || x == x_oponente2 - 5 || x == x_oponente2 + 5) && y == canvas.height-(0.6*canvas.height+100)){
            x_oponente2 = 150
            vida = vida+1
            personagem_direita = false
            personagem_esquerda = false
        }
    }
    if((x == x_oponente1 || x == x_oponente1 - 5 || x == x_oponente1 + 5) && y == canvas.height - 211){
        personagem_direita = false
        personagem_esquerda = false
        vida = vida+1
        x = 5
        x_oponente1 = canvas.width - posicao_oponente
    }
    
    if(plataforma == true){
        cor_porta = 'rgb(100, 100, 100)'
        y_atirar = canvas.height - (0.6*canvas.height+50)
        CriarNitanerBigBoss()
    }
    else if(plataforma == false){
        y_atirar = canvas.height - 161
    }
    if(vida == 3){
        alert('Você perdeu as suas três vidas!')
        vida = 0
        location.reload()
    }
    if(colisao_tiro1 == true){
        cor_oponente1 = 'rgb(150, 255, 150)'
        x_oponente1 = x_oponente1
        setTimeout(function(){
            x_oponente1 = x_oponente1 + 10
        }, 500)
        
        x_porta = canvas.width - 550   
    }
    else{
        colisao_tiro1 = false
        if(x_oponente1 >= canvas.width - 110){
            fator_soma = -5;
        }
        else if(x_oponente1 <= 10){
            fator_soma = 5;
        }
    
        x_oponente1 = x_oponente1 + fator_soma;
    }
    if(personagem_direita == true){

        c.fillStyle = 'rgb(255, 255, 255)';
        c.fillRect(x, y, 100,100);
        x=x+5;
        x_tiro=x
    }

    if(personagem_esquerda == true){
        c.fillStyle = 'rgb(255, 255, 255)';
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


