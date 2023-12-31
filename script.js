// SELECIONANDO TODOS AS TAGS DO HTML PARA O JAVASCRIPT ATRÁVES DO ID
const turnOn = document.getElementById ( 'Corda' );
const turnOff = document.getElementById ( 'Corda' );
const lamp = document.getElementById ( 'lamp' );
const Corda = document.getElementById('Corda');
//FUNÇÃO LAMPADA LIGADA
function lampOn () {
        lamp.src = './img/acesa.png'; // SELECIONA O ID LAMP DA IMAGEM NO HTML E TROCA PELA IMAGEM DA LÂMPADA ACESA
        Corda.src = './img/cordaAcesa.png' // SELECIONA O ID CORDA DA IMAGEM NO HTML E TROCA PELA IMAGEM DA CORDA ACESA
}
//FUNÇÃO LAMPÂDA APAGADA
function lampOff () {
        lamp.src = './img/apagada.png'; // SELECIONA O ID LAMP DA IMAGEM NO HTML E TROCA PELA IMAGEM DA LÂMPADA APAGADA
        Corda.src = './img/cordaApagada.png' // SELECIONA O ID CORDA DA IMAGEM NO HTML E TROCA PELA IMAGEM DA CORDA APAGADA
}

turnOn.addEventListener ( 'click', lampOn ); // É ADICIONADO UM MÉTODO ('ADDEVENLISTENER') QUE TEM DOIS PARÂMETROS, RECEBE UMA AÇÃO CLICK DO MOUSE SOBRE O ID 'CORDA'E A FUNÇÃO LAMPON
turnOff.addEventListener ( 'dblclick', lampOff ); // É ADICIONADO UM MÉTODO ('ADDEVENLISTENER') QUE TEM DOIS PARÂMETROS, RECEBE UMA AÇÃO DBCLICK 'DOIS CLICKS' DO MOUSE SOBRE O ID 'CORDA'E A FUNÇÃO LAMPOF

//SELECIONA O ID BOTAO DO ELEMENTO HTML
const botao = document.getElementById('botao');
// É ADICIONADO UM MÉTODO ('ADDEVENLISTENER') QUE TEM DOIS PARÂMETROS, RECEBE UMA AÇÃO MOUSEOVER, OU SEJA QUANDO O MOUSE ESTIVER SOBRE ESTE ELEMENTO O MÉTODO É EXECUTADO E UMA ARROW FUNCTION
botao.addEventListener('mouseover', () => {
  const novoTopo = Math.floor(Math.random() * 400); // CRIA UMA CONSTANTE NOVOTOPO QUE RECEBE Ó MÉTODO MATH.FLOOR QUE ARREDONDA QUALQUER VALOR DENTRO DE SEUS PARÂMTROS, DENTRO DOS PARÂMETROS DO MATH.FLOOR TEM OUTRO MÉTODO MATH.RANDOM () * 400 QUE GERA VALORES ALEATÓRIOS DE 0 ATÉ 400
  const novoEsquerda = Math.floor(Math.random() * 400); // CRIA UMA CONSTANTE NOVOESQUERDA QUE RECEBE Ó MÉTODO MATH.FLOOR QUE ARREDONDA QUALQUER VALOR DENTRO DE SEUS PARÂMTROS, DENTRO DOS PARÂMETROS DO MATH.FLOOR TEM OUTRO MÉTODO MATH.RANDOM () * 400 QUE GERA VALORES ALEATÓRIOS DE 0 ATÉ 400
  botao.style.top = `${novoTopo}px`; // SELECIONA O ID BOTÃO E PASSA PARA ELE UMA NOVA REGRA DE ALTURA ('TOP') ATRAVÉS DOS VALORES GERADOS PELA CONSTANTE NOVOTOPO
  botao.style.left = `${novoEsquerda}px`; // SELECIONA O ID BOTÃO E PASSA PARA ELE UMA NOVA REGRA DE DISTÂNCIA DA SUA ESQUERDA ('LEFT') ATRAVÉS DOS VALORES GERADOS PELA CONSTANTE NOVOESQUERDA
});