
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

var pos_y_charles = (largura_canvas) * 0.9681 - lado_do_quadrado //Posição inicial no eixo vertical
var pos_x_charles = (comprimento_canvas) - lado_do_quadrado//Posição inicial no eixo horizontal

var pos_x_caleb = pos_x_charles - 40
var pos_y_caleb = (largura_canvas) * 0.9681 - lado_do_quadrado


var velocidade_charles = 8; // velocidade dopersonagem

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


    requestAnimationFrame(animate); //fica chamando a função animate

    //para colocar limite no lado direito do canvas
    if (pos_x_charles >= (comprimento_canvas) - lado_do_quadrado) {
        ir_direita = false

    }


    if (pos_x_charles < 0) {
        ir_esquerda = false
    }

    

    if (pos_x_charles < comprimento_canvas * 0.385 && pos_x_charles > (comprimento_canvas * 0.385 - (comprimento_canvas * 0.385 - comprimento_canvas * 0.3014))) { // para coletar o queijo
        cor_queijo = 'transparent'
    }

    if (pos_y_charles < largura_canvas * 0.67 && ((pos_x_charles + lado_do_quadrado) > (comprimento_canvas * 0.275 - 2 * raio_circulos)) && ((pos_x_charles - lado_do_quadrado) < (comprimento_canvas * 0.275 - 2 * raio_circulos))) { // para coletar o queijo
        cor_laranja = 'transparent'
    }

    if (pos_y_charles < largura_canvas * 0.478 && ((pos_x_charles + lado_do_quadrado) > (comprimento_canvas * 0.173 - 2 * raio_circulos)) && ((pos_x_charles - lado_do_quadrado) < (comprimento_canvas * 0.173 - 2 * raio_circulos))) { // para coletar o queijo
        cor_cereja = 'transparent'
    }

    if (pos_y_charles < largura_canvas * 0.8771 && ((pos_x_charles + lado_do_quadrado) > (comprimento_canvas * 0.173 - 2 * raio_circulos)) && ((pos_x_charles - lado_do_quadrado) < (comprimento_canvas * 0.173 - 2 * raio_circulos))) { // para coletar o queijo
        cor_tomate = 'transparent'
    }

    if (cor_cereja == 'transparent' && cor_laranja == 'transparent' && cor_tomate == 'transparent' && cor_queijo == 'transparent' && fase_completa == false && (pos_x_charles >= (comprimento_canvas) - lado_do_quadrado)) {
        fase_completa = true
        alert('Parabéns você coletou todos os suprimentos!!!')
        window.location.href = 'comecar_fase2.html'
    }



    if (ir_direita == true) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'white'//cor de preenchimento do quadrado
        c.fillRect(pos_x_charles, pos_y_charles, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões
        pos_x_charles = pos_x_charles + velocidade_charles;
    }

    if (ir_direita == false) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'white'//cor de preenchimento do quadrado
        c.fillRect(pos_x_charles, pos_y_charles, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões
    }

    if (ir_esquerda == true) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'white'//cor de preenchimento do quadrado
        c.fillRect(pos_x_charles, pos_y_charles, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões
        pos_x_charles = pos_x_charles - velocidade_charles;
    }

    if (ir_esquerda == false) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'white'//cor de preenchimento do quadrado
        c.fillRect(pos_x_charles, pos_y_charles, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões
    }

    if (pular == true) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'white'//cor de preenchimento do quadrado
        c.fillRect(pos_x_charles, pos_y_charles, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões
        pos_y_charles = pos_y_charles - altura_do_pulo;

        setTimeout(function () {
            c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
            c.fillStyle = 'white'//cor de preenchimento do quadrado
            c.fillRect(pos_x_charles, pos_y_charles, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões
            pos_y_charles = pos_y_charles + altura_do_pulo;
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

    // desenho do Caleb
    c.fillStyle = '#757575'//cor de preenchimento do quadrado
    c.fillRect(pos_x_charles + lado_do_quadrado + 0.5 * lado_do_quadrado, pos_y_caleb, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões

}


document.addEventListener('keydown', tecla_direita_apertada, false);
document.addEventListener('keyup', tecla_direita_solta, false);

document.addEventListener('keydown', tecla_esquerda_apertada, false);
document.addEventListener('keyup', tecla_esquerda_solta, false);

document.addEventListener('keydown', tecla_pular_apertada, false);
document.addEventListener('keyup', tecla_pular_solta, false);

function tecla_pular_apertada(e) {

    if (e.keyCode == 38) {

        pular = true

    }
}

function tecla_pular_solta(e) {


    if (e.keyCode == 38) {

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



