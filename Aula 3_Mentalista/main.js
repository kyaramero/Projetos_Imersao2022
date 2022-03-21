// Variável de randomização
let numeroAleatorio = Math.floor(Math.random() * 21);
// Quantidade de tentativas
let numeroTentativas = 6;
// Botão
let botao = document.querySelector("#btn-chutar");
// Localização de texto
let tentativasNaTela = document.querySelector("#tentativas")
let resultadoNaTela = document.querySelector("#resultado")

// Função chute do usuário + loop
function Chutar() {
  while (numeroTentativas <= 6 && numeroTentativas > 0) {
    let chute = parseInt(document.querySelector("#valor").value);
    document.querySelector("#valor").value = ``;
    // Atualização de tentativas
    numeroTentativas--;
    tentativasNaTela.innerHTML = `Restam ${numeroTentativas} tentativas.`;

    // Condição de derrota
    if (numeroTentativas == 0) {
        tentativasNaTela.innerHTML = `Perdeu. Desconexão realizada.`;
        resultadoNaTela.innerHTML = `O número correto era ${numeroAleatorio}.`;
      botao.disabled = true;
    }
    
    // Acerto
    else if (chute == numeroAleatorio) {
      resultadoNaTela.innerHTML = `Você acertou. Sua mente está conectada a máquina.`;
      tentativasNaTela.innerHTML = ``;
      botao.disabled = true;
    }

    // Inválido
    else if (chute < 0 || chute > 20) {
        resultadoNaTela.innerHTML = `Erro. Digite um número válido`;

    // Maior ou menor
    } else if (chute < numeroAleatorio) {
        resultadoNaTela.innerHTML = `Você errou. O número é maior.`;
    } else if (chute > numeroAleatorio) {
        resultadoNaTela.innerHTML = `Você errou. O número é menor.`;
    }
    break;
  }
}
