//Criação do canvas
var canvas = document.querySelector('canvas') //funciona com o nome do elemento 
canvas.width = window.innerWidth//insere no canva a largura da tela 
canvas.height = window.innerHeight //insere no canva a altura da tela
var c = canvas.getContext('2d') // c é pincel do canva, ou seja o 'super object'

//Variáveis de controle de ação
var ir_direita = false
var ir_esquerda = false
var pular = false
var fase_completa = false


try {

    var largura_canvas = window.innerHeight
    var comprimento_canvas = window.innerWidth

}

catch {
    console.log("tamanho do monitor não capturado")
    largura_canvas = 627
    comprimento_canvas = 1325

}

//variaveis de definições de tamanho, posição e velocidade
var lado_do_quadrado = largura_canvas * 0.127591
var raio_circulos = lado_do_quadrado * 0.4

var pos_y_charles = (largura_canvas) * 0.9681 - lado_do_quadrado //Posição inicial no eixo vertical
var pos_x_charles = (comprimento_canvas) - lado_do_quadrado//Posição inicial no eixo horizontal

var pos_x_caleb = pos_x_charles - 40
var pos_y_caleb = (largura_canvas) * 0.9681 - lado_do_quadrado

var velocidade_charles = 8 // velocidade do personagem
var altura_do_pulo = largura_canvas * 0.42

var cor_queijo = "yellow"
var cor_laranja = "#F5843F"
var cor_cereja = "#C90407"
var cor_tomate = "#D64D53"
var cor_charles = "white"
var cor_caleb = '#757575'




function animate() {


    requestAnimationFrame(animate) //fica chamando a função animate

    //para colocar limite no lado direito do canvas
    if (pos_x_charles >= (comprimento_canvas) - lado_do_quadrado) {
        ir_direita = false

    }

   //para colocar limite no lado esquerdo do canvas
    if (pos_x_charles < 0) {
        ir_esquerda = false
    }


    //Se o queijo for coletado
    if (pos_x_charles < comprimento_canvas * 0.385 && pos_x_charles > (comprimento_canvas * 0.385 - (comprimento_canvas * 0.385 - comprimento_canvas * 0.3014))) { 
        cor_queijo = 'transparent'
    }
    //Se a laranja for coletada
    if (pos_y_charles < largura_canvas * 0.67 && ((pos_x_charles + lado_do_quadrado) > (comprimento_canvas * 0.275 - 2 * raio_circulos)) && ((pos_x_charles - lado_do_quadrado) < (comprimento_canvas * 0.275 - 2 * raio_circulos))) { // para coletar o queijo
        cor_laranja = 'transparent'
    }
    //Se a cereja for coletada
    if (pos_y_charles < largura_canvas * 0.478 && ((pos_x_charles + lado_do_quadrado) > (comprimento_canvas * 0.173 - 2 * raio_circulos)) && ((pos_x_charles - lado_do_quadrado) < (comprimento_canvas * 0.173 - 2 * raio_circulos))) { // para coletar o queijo
        cor_cereja = 'transparent'
    }
    //Se o tomate for coletado
    if (pos_y_charles < largura_canvas * 0.8771 && ((pos_x_charles + lado_do_quadrado) > (comprimento_canvas * 0.173 - 2 * raio_circulos)) && ((pos_x_charles - lado_do_quadrado) < (comprimento_canvas * 0.173 - 2 * raio_circulos))) { // para coletar o queijo
        cor_tomate = 'transparent'
    }
    //Se todos os itens forem coletados e o charles chegar na porta de saída do cenário
    if (cor_cereja == 'transparent' && cor_laranja == 'transparent' && cor_tomate == 'transparent' && cor_queijo == 'transparent' && fase_completa == false && (pos_x_charles >= (comprimento_canvas) - lado_do_quadrado)) {
        fase_completa = true
        alert('Parabéns você coletou todos os suprimentos!!!')

    }

// Movimentação do Charles(quadrado Branco)

    if (ir_esquerda == false) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = cor_charles//cor de preenchimento do quadrado
        c.fillRect(pos_x_charles, pos_y_charles, lado_do_quadrado, lado_do_quadrado) //serve para falar as dimensões
    }
    
    if (ir_direita == false) {
        // para o charles quando a tecla é solta
       c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
       c.fillStyle = cor_charles//cor de preenchimento do quadrado
       c.fillRect(pos_x_charles, pos_y_charles, lado_do_quadrado, lado_do_quadrado) //serve para falar as dimensões
   }

   if (ir_esquerda == true) {
       // para fazer o movimento para esquerda
       c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
       c.fillStyle = cor_charles//cor de preenchimento do quadrado
       c.fillRect(pos_x_charles, pos_y_charles, lado_do_quadrado, lado_do_quadrado) //serve para falar as dimensões
       pos_x_charles = pos_x_charles - velocidade_charles
   }
    if (ir_direita == true) {
        // para fazer o movimento para direita
        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = cor_charles//cor de preenchimento do quadrado
        c.fillRect(pos_x_charles, pos_y_charles, lado_do_quadrado, lado_do_quadrado) //serve para falar as dimensões
        pos_x_charles = pos_x_charles + velocidade_charles
    }

   
    if (pular == true) {
        //para fazer o pulo do charles
        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = cor_charles//cor de preenchimento do quadrado
        c.fillRect(pos_x_charles, pos_y_charles, lado_do_quadrado, lado_do_quadrado) //serve para falar as dimensões
        pos_y_charles = pos_y_charles - altura_do_pulo

        setTimeout(function () {// espera 250 milisegundos para executar o a função de voltar para a posição antes de fazer o pulo
            c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
            c.fillStyle = cor_charles//cor de preenchimento do quadrado
            c.fillRect(pos_x_charles, pos_y_charles, lado_do_quadrado, lado_do_quadrado) //serve para falar as dimensões
            pos_y_charles = pos_y_charles + altura_do_pulo
        }, 250)

        pular = false // serve para o quadrado não repetir a ação do pulo e sair do if

    }

    //DESENHO DOS ELEMENTOS ESTÁTICOS

    // Desenho do queijo
    c.beginPath()
    c.moveTo(comprimento_canvas * 0.385, largura_canvas * 0.8) //(x,y) // 470.5 
    c.lineTo(comprimento_canvas * 0.385, largura_canvas * 0.93)//(x,y)
    c.lineTo(comprimento_canvas * 0.3014, largura_canvas * 0.93)//(x,y)
    c.closePath()// liga o ponto final ao ponto inicial
    // the fill color
    c.fillStyle = cor_queijo
    c.fill()

    // Desenho da laranja
    c.beginPath()//inicio do comando 
    c.arc(comprimento_canvas * 0.275, largura_canvas * 0.67, raio_circulos, 0, Math.PI * 2)  //c.arc (x, y, raio do circulo, angulo_inicial(em rad), angulo_final(em rad), anti_horario ou horario)
    c.fillStyle = cor_laranja//cor para cobrir a área do círculo 
    c.fill() // comando para iniciar o preenchimento da cor

    //Desenho da cereja
    c.beginPath()//inicio do comando 
    c.arc(comprimento_canvas * 0.173, largura_canvas * 0.478, raio_circulos, 0, Math.PI * 2)  //c.arc (x, y, raio do circulo, angulo_inicial(em rad), angulo_final(em rad), anti_horario ou horario)
    c.fillStyle = cor_cereja//cor para cobrir a área do círculo 
    c.fill() // comando para iniciar o preenchimento da cor

    //Desenho do tomate
    c.beginPath()//inicio do comando 
    c.arc(comprimento_canvas * 0.173, largura_canvas * 0.8771, raio_circulos, 0, Math.PI * 2)  //c.arc (x, y, raio do circulo, angulo_inicial(em rad), angulo_final(em rad), anti_horario ou horario)
    c.fillStyle = cor_tomate//cor para cobrir a área do círculo 
    c.fill() // comando para iniciar o preenchimento da cor

    //Desenho do Caleb
    c.fillStyle = cor_caleb//cor de preenchimento do quadrado
    c.fillRect(pos_x_charles + lado_do_quadrado + 0.5 * lado_do_quadrado, pos_y_caleb, lado_do_quadrado, lado_do_quadrado) //serve para falar as dimensões

}



function teclas_apertadas(e) {

    if (e.keyCode == 38) {

        pular = true

    }

  if (e.keyCode == 39) {

        ir_direita = true

    }

    else if (e.keyCode == 37) {

        ir_esquerda = true

    }
}




function teclas_soltas(e) {


    if (e.keyCode == 38) {

        pular = false
    }

    if (e.keyCode == 39) {

        ir_direita = false
    }

   else if (e.keyCode == 37) {
        ir_esquerda = false

    }
}


document.addEventListener('keydown', teclas_apertadas)
document.addEventListener('keyup', teclas_soltas)


animate()



