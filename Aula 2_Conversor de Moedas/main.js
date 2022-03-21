// Variáveis de usuário e resultado
let userInput = document.querySelector("#valorDigitado")
let resultado = document.querySelector("#resultadoConversao")

// Variáveis dos radios
let escolhaDolar = document.querySelector("#dolar")
let escolhaBitcoin = document.querySelector("#bitcoin")
let escolhaEuro = document.querySelector("#euro")

// Opções de conversão 
function Conversor() {
  if (escolhaDolar.checked && userInput.value.length !== 0) {
    paraDolar();
    escolhaDolar.checked = false;
  }
  else if (escolhaBitcoin.checked && userInput.value.length !== 0) {
    paraBitcoin();
    escolhaBitcoin.checked = false;
  }
  else if (escolhaEuro.checked && userInput.value.length !== 0) {
    paraEuro()
    escolhaEuro.checked = false;
  }
  else {
    resultado.innerHTML = `Escolha uma opção válida`
    escolhaDolar.checked = false;
    escolhaBitcoin.checked = false;
    escolhaEuro.checked = false;
  }
  userInput.value = ``
}

// Funções das moedas
function paraDolar() {
  let valorDolar = parseFloat(userInput.value / 5.08).toFixed(2)
  resultado.innerHTML = `U$ ${valorDolar}`
}

function paraBitcoin() {
  let valorBitcoin = parseFloat(userInput.value / 198498,98).toFixed(2)
  resultado.innerHTML = `${valorBitcoin} BTC`
}

function paraEuro() {
  let valorEuro = parseFloat(userInput.value / 5.54).toFixed(2)
  resultado.innerHTML = `EUR ${valorEuro}`
}