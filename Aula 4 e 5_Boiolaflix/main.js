let listaLivros = [
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1591711593l/51179990.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1625498441i/54886974.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1643753957i/54756850.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627460785i/55073801.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1540398925i/41662515.jpg"
  ];
  
let listaGoodreads = [
    "https://www.goodreads.com/book/show/51179990-written-in-the-stars?ref=nav_sb_ss_3_7",
    "https://www.goodreads.com/book/show/54886974-this-rebel-heart?ref=nav_sb_ss_1_10",
    "https://www.goodreads.com/book/show/54756850-delilah-green-doesn-t-care?ref=nav_sb_ss_1_6",
    "https://www.goodreads.com/book/show/55073801-tripping-arcadia?ref=nav_sb_ss_1_16",
    "https://www.goodreads.com/book/show/41662515-breaking-character"
  ];
  
  // Colocando livros iniciais na tela
  
  for (i = 0; i < listaLivros.length; i++) {
    document.querySelector(
      "#capas"
    ).innerHTML += `<div id="novoLivro"><img src="${listaLivros[i]}"> <button onclick="RemoverLivro(${i})" id="botaoRemover">❌</button> <a href="${listaGoodreads[i]}" target="_blank"></div>`;
  }
  // Adicionando novos livros
  
  function AdicionarLivro() {
    document.querySelector("#erro").innerHTML = ``;
    novaImagem = document.querySelector("#uparImagem").value;
    novoGoodreads = document.querySelector("#uparLink").value;
        // Checar duplicata
    if (
      listaLivros.includes(novaImagem) ||
      listaGoodreads.includes(novoGoodreads)
    ) {
      document.querySelector(
        "#erro"
      ).innerHTML = `<span>Você já adicionou esse livro.</span>`;
    } else {
        // Checar se é imagem
      if (novaImagem.endsWith(".jpg") || novaImagem.endsWith(".png")) {
        listaLivros.push(novaImagem);
        listaGoodreads.push(novoGoodreads);
        let imagemNaTela = document.querySelector("#capas");
        // Adicionando Link + imagem
        let capa = `<div id="novoLivro"><img src="${listaLivros[i]}"> <button onclick="RemoverLivro(${i})" id="botaoRemover">❌</button> <a href="${listaGoodreads[i]}" target="_blank"></div>`;
        imagemNaTela.innerHTML += capa;
        i++;
      } else {
        document.querySelector("#erro").innerHTML = `<span>Capa inválida.</span>`;
      }
    }
    document.querySelector("#uparImagem").value = ``;
    document.querySelector("#uparLink").value = ``;
  }
  
  function RemoverLivro(i) {
    listaLivros.splice(i, 1);
    listaGoodreads.splice(i, 1);
    document.querySelector("#capas").innerHTML = ``;
  
    for (i = 0; i < listaLivros.length; i++) {
      document.querySelector(
        "#capas"
      ).innerHTML += `<img src="${listaLivros[i]}"> <button  onclick="RemoverLivro(${i})" id="botaoRemover">❌</button> <a href="${listaGoodreads[i]}" target="_blank">`;
    }
  }
  