//define a variavel jogador e vencedor como null pq niguem começa ganhando kkk
var jogador,
  vencedor = null;
//puxa o jogador selecionado pelo id
var jogadorSelecionado = document.getElementById("jogador-selecionado");
// puxa o vencesor do jogo pelo id
var vencedorSelecionado = document.getElementById("vencedor-selecionado");
//funcao mudar de x para 0
mudarJogador("X");

//escolhe o quadrado pelo id das divs
function escolherQuadrado(id) {
  if (vencedor !== null) {
    return;
  }
  //puxa dentro da função a class da div quadrado
  var quadrado = document.getElementById(id);
  if (quadrado.innerHTML !== "-") {
    return;
  }
  //adiciona no quadrado  o jogador x ou 0
  quadrado.innerHTML = jogador;
  // aplica um estilo no quadrado
  quadrado.style.color = "#000";
  //logica quando estiver no jogador x e o cara clica dnv muda pra 0
  if (jogador === "X") {
    jogador = "O";
  } else {
    // senao ele ta no 0 entao muda pro x denovo
    jogador = "X";
  }

  // função pra mudar o jogador passando como paramentro o jogador que esta atualmente

  mudarJogador(jogador);
  checaVencedor();
}
// função de mudar o jogador
function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
  //puxa os quadrados  das div
  var quadrado1 = document.getElementById(1);
  var quadrado2 = document.getElementById(2);
  var quadrado3 = document.getElementById(3);
  var quadrado4 = document.getElementById(4);
  var quadrado5 = document.getElementById(5);
  var quadrado6 = document.getElementById(6);
  var quadrado7 = document.getElementById(7);
  var quadrado8 = document.getElementById(8);
  var quadrado9 = document.getElementById(9);
  //logica pora identificar as sequencias que são nescessarias pra vencer

  if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
    mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
    mudarVencedor(quadrado1);
    return;
  }
  //logica pora identificar as sequencias que são nescessarias pra vencer

  if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
    mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
    mudarVencedor(quadrado4);
    return;
  }
  //logica pora identificar as sequencias que são nescessarias pra vencer

  if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
    mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
    mudarVencedor(quadrado7);
    return;
  }
  //logica pora identificar as sequencias que são nescessarias pra vencer

  if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
    mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
    mudarVencedor(quadrado1);
    return;
  }
  //logica pora identificar as sequencias que são nescessarias pra vencer

  if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
    mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
    mudarVencedor(quadrado2);
    return;
  }
  //logica pora identificar as sequencias que são nescessarias pra vencer

  if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
    mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
    mudarVencedor(quadrado3);
    return;
  }
  //logica pora identificar as sequencias que são nescessarias pra vencer

  if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
    mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
    mudarVencedor(quadrado1);
    return;
  }
  //logica pora identificar as sequencias que são nescessarias pra vencer

  if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
    mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
    mudarVencedor(quadrado3);
  }
}
//função pra mudar o vencedor do jogo
function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;
}
//função pra quando a sequncia for a certa muda a cor para verde
function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = "#0f0";
  quadrado2.style.background = "#0f0";
  quadrado3.style.background = "#0f0";
}
//checa se a sequencia é igual
function checaSequencia(quadrado1, quadrado2, quadrado3) {
  var eigual = false;

  if (
    quadrado1.innerHTML !== "-" &&
    quadrado1.innerHTML === quadrado2.innerHTML &&
    quadrado2.innerHTML === quadrado3.innerHTML
  ) {
    eigual = true;
  }

  return eigual;
}
// zera o jogo pra começar denovo
function reiniciar() {
  vencedor = null;
  vencedorSelecionado.innerHTML = "";

  for (var i = 1; i <= 9; i++) {
    var quadrado = document.getElementById(i);
    quadrado.style.background = "#eee";
    quadrado.style.color = "#eee";
    quadrado.innerHTML = "-";
  }

  mudarJogador("X");
}
