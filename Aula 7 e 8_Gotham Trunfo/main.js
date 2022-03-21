let harley = {
    nome: "Harley Quinn",
    icon: "https://i.pinimg.com/originals/9f/34/6c/9f346c1d7872153fe30a870d469b54f2.png",
      atributos: {
      ataque: 4, 
      carisma: 5,
      defesa: 3
    }
    }
  let ivy = {
    nome: "Poison Ivy",
    icon: "https://i.pinimg.com/originals/75/a5/d5/75a5d5954bc73907f1980e12ac53870a.png",
      atributos: {
      ataque: 5,
      carisma: 3,
      defesa: 4
    }
    }
  let shark = {
     nome: "King Shark",
     icon: "https://i.pinimg.com/564x/99/9f/28/999f28a05620b16552e293f6cf737e3e.jpg",
      atributos: {
      ataque: 5,
      carisma: 4,
      defesa: 3
    }
  }
  let clayface = {
    nome: "Clayface",
    icon: "https://epipoca.com.br/wp-content/uploads/2021/10/cara-de-barro-harley-quinn.jpg",
    atributos: {
      ataque: 3,
      carisma: 4,
      defesa: 3
    }
  }
  let kiteman = {
    nome: "Kite Man",
    icon: "https://64.media.tumblr.com/0c26a8f69781088b46bbac3cda60ab8e/a31d6d0bc04cba56-78/s640x960/cded8966df301958ee9dd380f9511eef2fcfea13.jpg",
    atributos: {
      ataque: 2,
      carisma: 1,
      defesa: 1
  }
  }
  let psycho = {
    nome: "Doctor Psycho",
    icon: "https://sportshub.cbsistatic.com/i/2021/03/18/3f3bae25-06f4-472f-9cd9-c9a072ed55cc/harley-quinn-doctor-psycho-1237571.jpg",
    atributos: {
    ataque: 3,
      carisma: -1,
      defesa: 4
  }
  }
  let catwoman = {
     nome: "Catwoman",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdt-LsEBuPqv-vtZaCJcPk3pUlua6Q_F8nJ4eYMklPynPs-9VifX8BmC0z3OHGa93t4ZI&usqp=CAU",
    atributos: {
    ataque: 4,
      carisma: 5,
      defesa: 4
  }
  }
  let batgirl = {
    nome: "Batgirl",
    icon: "https://pyxis.nymag.com/v1/imgs/e7e/de2/dfec85342a4409f6ae048710fb6b99efef-batgirl-harley-quinn.rsquare.w330.jpg",
    atributos: {
      ataque: 4,
      carisma: 3,
      defesa: 4
    }
  }
  
  let cartas = [harley, ivy, shark, clayface, kiteman, psycho, catwoman, batgirl]
  let cartaJogador;
  let cartaMaquina;
  
  function sortearCarta() {
    let numeroAleatorioMaquina = parseInt(Math.random() * 8)
    cartaMaquina = cartas[numeroAleatorioMaquina]
    
    let numeroAleatorioJogador = parseInt(Math.random() * 8)
        while (numeroAleatorioMaquina == numeroAleatorioJogador) {
          numeroAleatorioJogador
        }
        cartaJogador = cartas[numeroAleatorioJogador]
    
    document.querySelector("#btnSortear").disabled = true;
    document.querySelector("#btnJogar").disabled = false;
    
    exibirCartaJogador()
  }
  
  function exibirCartaJogador() {
    let divCartaJogador  = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.icon})`;
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHTML = `<div id="opcoes" class="carta-status">`
    
    let lugarNaTela = ``
    for (let atributo in cartaJogador.atributos) {
      lugarNaTela += `<input type="radio" name="atributo" value="${atributo}">${atributo} ${cartaJogador.atributos[atributo]}<br>`
    }
    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    
    divCartaJogador.innerHTML = moldura + nome + tagHTML + lugarNaTela + "</div>";
  }
  
  function exibirCartaMaquina() {
    let divCartaMaquina  = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.icon})`;
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHTML = `<div id="opcoes" class="carta-status">`
    
    let lugarNaTela = ``
    for (let atributo in cartaMaquina.atributos) {
      lugarNaTela += `<p value="${atributo}">${atributo} ${cartaMaquina.atributos[atributo]}</p>`
    }
    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + lugarNaTela + "</div>";
  }
  
  function opcaoSelecionada() {
    let radioAtributos = document.getElementsByName("atributo")
    
    for (let i=0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true){
        return radioAtributos[i].value
      }
    }
  }
  
  function jogar() {
    let atributoSelecionado = opcaoSelecionada()
    let elementoresultado = document.querySelector("#resultado")
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
    
    if(valorCartaJogador > valorCartaMaquina) {
      elementoresultado.innerHTML = `Você ganhou. <span>Sua carta é f4cking awesome</span>`
    }
    else if (valorCartaJogador < valorCartaMaquina) {
      elementoresultado.innerHTML = `You piece of shit vulgo <span>SEU MERDA</span>`
    }
    else if (!valorCartaJogador) {
      elementoresultado.innerHTML = `Você não selecionou atributo. <span>Anda logo ou o Bats vai te pegar.</span>`
    }
    else if (valorCartaJogador == valorCartaMaquina) {
      elementoresultado.innerHTML = `<span>Claramente vão morrer juntos</span>`
    }
    document.querySelector("#btnReiniciar").disabled = false;
    document.querySelector("#btnJogar").disabled = true;
    exibirCartaMaquina()
  }
  
  function reiniciar() {
    document.querySelector("#resultado").innerHTML = ``
    document.querySelector("#btnSortear").disabled = false;
    // Limpando tela
    let divCartaJogador  = document.getElementById("carta-jogador");
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = ``;
    divCartaJogador.innerHTML = moldura ;
    
    let divCartaMaquina  = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = ``;
    divCartaMaquina.innerHTML = moldura ;
  }