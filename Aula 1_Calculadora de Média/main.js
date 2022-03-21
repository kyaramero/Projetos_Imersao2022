        //DOM & Função
        document.querySelector("#enviar-notas").onclick = function (e){
    
            // Criação de variáveis
            let primeiraNota = parseFloat(document.querySelector("#primeira-nota").value)
    
            let segundaNota = parseFloat(document.querySelector("#segunda-nota").value)
    
            let terceiraNota = parseFloat(document.querySelector("#terceira-nota").value)
    
            let quartaNota = parseFloat(document.querySelector("#quarta-nota").value)
    
            let mediaTotal = ((primeiraNota + segundaNota + terceiraNota + quartaNota) / 4).toFixed(2)
    
            //Situação de aprovação
        if(mediaTotal > 7){ 
        document.querySelector(".notaFinal").innerHTML = `Sua média é ${mediaTotal}. Você foi aprovado.`
      }
            //Erro
        else if(isNaN(mediaTotal)){
          document.querySelector(".notaFinal").innerHTML = `Por favor, digite os números corretamente.`
        }
            //Situação de reprovação
        else{ 
        document.querySelector(".notaFinal").innerHTML = `Sua média é ${mediaTotal}. Você foi reprovado.`
      }
    }