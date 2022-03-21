## Boiolaflix

<p align="center"><img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-conversor-de-moedas.svg" alt="imersao-logo"></p>

### Projeto desenvolvido no quarto e quinto dia da Imersão DEV

Devo dizer que esse foi o projeto que mais me deixou animada. Claro que, curiosa do jeito que estava, ainda passei por bons percalços, alguns erros e quebra-cabeças tentando acertar. Arrays e seus métodos, uma nova forma de contar partindo do 0 (zero), um novo tipo de loop, o for e validação fizeram parte desses dois momentos. 

```Javascript 
for (i = 0; i < listaLivros.length; i++) {
    document.querySelector(
      "#capas"
    ).innerHTML += `<div id="novoLivro"><img src="${listaLivros[i]}"> <button onclick="RemoverLivro(${i})" id="botaoRemover">❌</button> <a href="${listaGoodreads[i]}" target="_blank"></div>`;
  }
```

Sempre tive dúvidas quando via exemplos da condição de um for e, o motivo de comumente, ser o usado o "i". Os espaços separados por ponto e vírgula costumava me confundir, mas creio que finalmente entendi. 

1° Declaração (i=0): onde se inicia
2° Declaração (i < listaLivros.length>): até onde vai, a condição
3° Declaração (i++): a cada rodada, o que muda

***

#### 👩‍💻 Autora: Júlia Andrade

❌ Me encontre [aqui](https://linktr.ee/julia.b.andrade)


<img src="https://www.alura.com.br/assets/img/alura-share.1647533642.png" alt="alura-logo" style="width: 5%;"><img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png" alt="javascript-logo" style="width: 5%;"><img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="css-logo" style="width: 5%;"><img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="html-logo" style="width: 5%;">