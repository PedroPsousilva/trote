function calcular(){
        //JS é uma linguagemnão tipada(sem tipo de dados)
        //Number() é uma função que converte texto em numero
        //Recupera o valor informado no elemento com id qtdeArroz
        let qtdeArroz =Number(document.getElementById("qtdeArroz").value)
        //Recupera o valor informado no elemento com id qtdeArroz
        let qtdeFeijao =Number( document.getElementById("qtdeFeijao").value)
        let qtdeOleo =Number( document.getElementById("qtdeOleo").value)
        let qtdeMacarrao =Number( document.getElementById("qtdeMacarrao").value)
        //calcula o valor total de pontos
        let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)
        //Vamos exibir o resultado para o usuario
        document.getElementById("resultado").innerText ="Pontuação Total: " +  pontos

        // Calcula o valor das metas
        let kitAlimentacao = Number(document.getElementById("kitAlimentacao") .value )
        if (kitAlimentacao>=60 ) {
            pontos = pontos + 5000 // Já garantiu o 5000 pontos
            if(kitAlimentacao > 60){
                 pontos = pontos + (5000 / 60) * (kitAlimentacao - 60) * 83.33
            }
        }
        else{
            pontos = pontos + (5000 / 60) * (kitAlimentacao * 83.33)
        }
    }