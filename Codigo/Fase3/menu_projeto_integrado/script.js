function Fase1(){
    window.location.href = 'index.html'
}
function Fase2(){
    console.log('Fase 2')
}
function Fase3(){
    console.log('Fase 3')
}

function CriarBotaoFase1(){
    const botao_fase = document.createElement('button')
    botao_fase.classList.add('botao_fases')
    botao_fase.innerHTML = 'FASE 1'
    botao_fase.type='button'
    botao_fase.addEventListener('click', Fase1)

    return botao_fase
}
function CriarBotaoFase2(){
    const botao_fase = document.createElement('button')
    botao_fase.classList.add('botao_fases')
    botao_fase.innerHTML = 'FASE 2'
    botao_fase.type='button'
    botao_fase.addEventListener('click', Fase2)

    return botao_fase
}
function CriarBotaoFase3(){
    const botao_fase = document.createElement('button')
    botao_fase.classList.add('botao_fases')
    botao_fase.innerHTML = 'FASE 3'
    botao_fase.type='button'
    botao_fase.addEventListener('click', Fase3)

    return botao_fase
}

function Botao1(){
    const lista_botoes = document.querySelector('[lista-botoes]') 
    const novo_item_lista = document.createElement('li')

    novo_item_lista.appendChild(CriarBotaoFase1())
    
    lista_botoes.appendChild(novo_item_lista)

    Botao2()

}
function Botao2(){
    const lista_botoes = document.querySelector('[lista-botoes]') 
    const novo_item_lista = document.createElement('li')

    novo_item_lista.appendChild(CriarBotaoFase2())
    
    lista_botoes.appendChild(novo_item_lista)

    Botao3()
    
}
function Botao3(){
    const lista_botoes = document.querySelector('[lista-botoes]') 
    const novo_item_lista = document.createElement('li')

    novo_item_lista.appendChild(CriarBotaoFase3())
    
    lista_botoes.appendChild(novo_item_lista)
    
}
function CarregarJogo(){
    Botao1()
}

function Sair(){
    let new_window =
            open(location, '_self');
  
        // Close this window
        new_window.close();
  
        return false;
}