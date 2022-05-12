
var canvas = document.querySelector('canvas'); //funciona com o nome do elemento 
canvas.width = window.innerWidth;//insere no canva a largura da tela 
canvas.height = window.innerHeight //insere no canva a altura da tela
var c = canvas.getContext('2d'); // c é pincel do canva, ou seja o 'super object'

var ir_direita = false
var ir_esquerda = false
var inicio = true

var pular = false
var fase_completa = false

var largura_canvas = window.innerHeight
var comprimento_canvas = window.innerWidth

var lado_do_quadrado = largura_canvas * 0.127591
var raio_circulos = lado_do_quadrado * 0.4

var y = (largura_canvas) * 0.9681 - lado_do_quadrado //Posição inicial no eixo vertical
var x = (comprimento_canvas)  - lado_do_quadrado//Posição inicial no eixo horizontal
var dx = 8; // velocidade dopersonagem

var posy_plataforma = (largura_canvas) * 0.404 
var altura_da_plataforma = (largura_canvas) * 0.9681 - posy_plataforma// em relação ao chao

var altura_do_pulo = largura_canvas * 0.42

// console.log(lado_do_quadrado)
var plataforma = false


var largura_plataforma = largura_canvas * 0.03189
var comprimento_plataforma = comprimento_canvas * 0.3018

var cor_queijo = "yellow"
var cor_laranja = "#F5843F"
var cor_cereja = "#C90407"
var cor_tomate = "#D64D53"






function animate() {

    console.log(x)
    //    console.log(altura_da_plataforma)
    requestAnimationFrame(animate); //fica chamando a função animate

    //para colocar limite no lado direito do canvas
    if(x>=(comprimento_canvas)  - lado_do_quadrado){
        ir_direita = false
    }


    if(x<0){
        ir_esquerda = false
    }

    if (x < comprimento_canvas * 0.385 && x > (comprimento_canvas * 0.385 - (comprimento_canvas * 0.385 - comprimento_canvas * 0.3014))) { // para coletar o queijo
        cor_queijo = 'transparent'
    }

    if (y < largura_canvas * 0.67 && ((x+lado_do_quadrado) > (comprimento_canvas * 0.275 - 2 * raio_circulos)) && ((x-lado_do_quadrado) < (comprimento_canvas * 0.275-2*raio_circulos))) { // para coletar o queijo
        cor_laranja = 'transparent'
    }

    if (y < largura_canvas * 0.478 && ((x+lado_do_quadrado) > (comprimento_canvas * 0.173 - 2 * raio_circulos)) && ((x-lado_do_quadrado)< (comprimento_canvas * 0.173-2*raio_circulos))) { // para coletar o queijo
        cor_cereja = 'transparent'
    }

    if (y < largura_canvas * 0.8771 && ((x+lado_do_quadrado)> (comprimento_canvas * 0.173 - 2 * raio_circulos)) && ((x-lado_do_quadrado) < (comprimento_canvas * 0.173-2*raio_circulos))) { // para coletar o queijo
        cor_tomate = 'transparent'
    }

    if(cor_cereja=='transparent' && cor_laranja=='transparent' && cor_tomate=='transparent' && cor_queijo=='transparent' && fase_completa==false && (x>=(comprimento_canvas)  - lado_do_quadrado) ){
        fase_completa=true
        alert('Fase 1 concluida')

    }



    if (ir_direita == true) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'red'//cor de preenchimento do quadrado
        c.fillRect(x, y, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões
        x = x + dx;
    }

    if (ir_direita == false) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'red'//cor de preenchimento do quadrado
        c.fillRect(x, y, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões
    }

    if (ir_esquerda == true) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'red'//cor de preenchimento do quadrado
        c.fillRect(x, y, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões
        x = x - dx;
    }

    if (ir_esquerda == false) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'red'//cor de preenchimento do quadrado
        c.fillRect(x, y, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões
    }

    if (pular == true) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'red'//cor de preenchimento do quadrado
        c.fillRect(x, y, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões
        y = y - altura_do_pulo;

        setTimeout(function () {
            c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
            c.fillStyle = 'red'//cor de preenchimento do quadrado
            c.fillRect(x, y, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões
            y = y + altura_do_pulo;
        }, 250)

        pular = false

    }



    // if (pular == true && ir_direita == false && ir_esquerda == false) {

    //     pular = false
    // }


    // if (pular == true && ir_direita == true) {

    //     ir_direita = false
    //     ir_esquerda = false
    //     pular = false
    // }

    // if (pular == true && ir_esquerda == true) {


    //     ir_direita = false
    //     ir_esquerda = false
    //     pular = false
    // }


    c.fillStyle = 'transparent'//cor de preenchimento do quadrado
    c.fillRect(0, (largura_canvas * 0.968102), (comprimento_canvas), lado_do_quadrado); //serve para falar as dimensões

    // QUEIJO

    c.beginPath();
    c.moveTo(comprimento_canvas * 0.385, largura_canvas * 0.8) //(x,y) // 470.5 
    c.lineTo(comprimento_canvas * 0.385, largura_canvas * 0.93);//(x,y)
    c.lineTo(comprimento_canvas * 0.3014, largura_canvas * 0.93);//(x,y)
    c.closePath();// liga o ponto final ao ponto inicial
    // the fill color
    c.fillStyle = cor_queijo;
    c.fill();

    c.beginPath()//inicio do comando 
    c.arc(comprimento_canvas * 0.275, largura_canvas * 0.67, raio_circulos, 0, Math.PI * 2, false)  //c.arc (x, y, raio do circulo, angulo_inicial(em rad), angulo_final(em rad), anti_horario ou horario)
    c.fillStyle = cor_laranja//cor para cobrir a área do círculo 
    c.fill() // comando para iniciar o preenchimento da cor

    c.beginPath()//inicio do comando 
    c.arc(comprimento_canvas * 0.173, largura_canvas * 0.478, raio_circulos, 0, Math.PI * 2, false)  //c.arc (x, y, raio do circulo, angulo_inicial(em rad), angulo_final(em rad), anti_horario ou horario)
    c.fillStyle = cor_cereja//cor para cobrir a área do círculo 
    c.fill() // comando para iniciar o preenchimento da cor

    c.beginPath()//inicio do comando 
    c.arc(comprimento_canvas * 0.173, largura_canvas * 0.8771, raio_circulos, 0, Math.PI * 2, false)  //c.arc (x, y, raio do circulo, angulo_inicial(em rad), angulo_final(em rad), anti_horario ou horario)
    c.fillStyle = cor_tomate//cor para cobrir a área do círculo 
    c.fill() // comando para iniciar o preenchimento da cor


}


document.addEventListener('keydown', tecla_direita_apertada, false);
document.addEventListener('keyup', tecla_direita_solta, false);

document.addEventListener('keydown', tecla_esquerda_apertada, false);
document.addEventListener('keyup', tecla_esquerda_solta, false);

document.addEventListener('keydown', tecla_pular_apertada, false);
document.addEventListener('keyup', tecla_pular_solta, false);

function tecla_pular_apertada(e) {

    if (e.keyCode == 32) {

        pular = true

    }
}

function tecla_pular_solta(e) {


    if (e.keyCode == 32) {

        pular = false
    }
}


function tecla_direita_apertada(e) {

    if (e.keyCode == 39) {

        ir_direita = true

    }
}

function tecla_direita_solta(e) {


    if (e.keyCode == 39) {

        ir_direita = false
    }
}

function tecla_esquerda_apertada(e) {

    if (e.keyCode == 37) {

        ir_esquerda = true

    }
}

function tecla_esquerda_solta(e) {

    if (e.keyCode == 37) {
        ir_esquerda = false

    }
}



animate();



