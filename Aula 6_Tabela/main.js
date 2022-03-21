let cait = {
    nome: "Cait",
    icon:
      "https://64.media.tumblr.com/2252db2ba2dbba2541fc31752c55caa5/84acb653a6630f60-76/s400x600/a5af81ed045ff6492fafedb19ae27aa71e01d9a7.jpg",
    vitorias: 0,
    derrotas: 0,
    pontos: 0
  };
let jinx = {
    nome: "Jinx",
    icon:
      "https://64.media.tumblr.com/977d32c2160d0950a078dd0bfc312a1a/84acb653a6630f60-8a/s400x600/1dff8415fca22ebdd7735b1649a3331697d1662d.jpg",
    vitorias: 0,
    derrotas: 0,
    pontos: 0
  };
let vi = {
    nome: "Vi",
    icon:
      "https://64.media.tumblr.com/1c5d0d7e9ab6badba871f3576c7dc8cf/48bba8410acee568-7d/s400x600/2b5bf0f920bfbe71ec7815ec0f555610c617b174.jpg",
    vitorias: 0,
    derrotas: 0,
    pontos: 0
  };
  
let jogadores = [cait, jinx, vi];
  
  // Usuário adicionando jogadores
  function novoJogador() {
    document.querySelector("#caixaErro").innerHTML = ``
    let nome = document.querySelector("#novoNomeJogador").value;
    let icon = document.querySelector("#novoIconJogador").value;
        if (!nome) {
      document.querySelector("#caixaErro").innerHTML = `Insira um nome válido.`;
    } 
    
        else {
            let novoNome = {
                nome: nome,
                icon: icon,
                vitorias: 0,
                derrotas: 0,
                pontos: 0
            };
            jogadores.push(novoNome);
            exibeNaTela(jogadores);
            document.querySelector("#novoNomeJogador").value = ``;
            document.querySelector("#novoIconJogador").value = ``;
            }
  }
  
  // Calculando pontos
  function calculaPontos(jogador) {
    let pontos = jogador.vitorias * 5 + jogador.derrotas;
    jogador.pontos = pontos;
  }
  
  // Pondo na tela
  function exibeNaTela(jogadores) {
    let elemento = ``;
    for (let i = 0; i < jogadores.length; i++) {
      elemento += `<tr></td><td><img src="${jogadores[i].icon}"</td><td> ${jogadores[i].nome} 
       <td> ${jogadores[i].vitorias}</td>
       <td>${jogadores[i].derrotas}</td><td>${jogadores[i].pontos}</td>
       <td><button onClick='adicionarVitoria(${i})'>Vitória</button></td><td><button onClick='adicionarDerrota(${i})'>Derrota</button></td></tr>`;
    }
    let tabelaJogadores = document.querySelector("#tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
  }
  
  // Botões
  function adicionarVitoria(i) {
    jogadores[i].vitorias++;
    calculaPontos(jogadores[i]);
    for (j = 0; j < jogadores.length; j++) {
      if (jogadores[i].nome !== jogadores[j].nome) {
        jogadores[j].derrotas++;
      }
    }
    exibeNaTela(jogadores);
  }
  
  function adicionarDerrota(i) {
    jogadores[i].derrotas++;
    for (j = 0; j < jogadores.length; j++) {
      if (jogadores[i].nome !== jogadores[j].nome) {
        jogadores[j].vitorias++;
        calculaPontos(jogadores[j]);
      }
    }
    exibeNaTela(jogadores);
  }
  
  function resetar(i) {
    for (i = 0; i < jogadores.length; i++) {
      (jogadores[i].derrotas = 0),
        (jogadores[i].vitorias = 0),
        (jogadores[i].pontos = 0);
    }
    exibeNaTela(jogadores);
  }
  
  exibeNaTela(jogadores);
  