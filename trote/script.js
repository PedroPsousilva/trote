function calcular() {
    //JS é uma linguagemnão tipada(sem tipo de dados)
    //Number() é uma função que converte texto em numero
    //Recupera o valor informado no elemento com id qtdeArroz
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
    //Recupera o valor informado no elemento com id qtdeArroz
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
    let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
    //calcula o valor total de pontos
    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)
    //Vamos exibir o resultado para o usuario
    document.getElementById("resultado").innerText = "Pontuação Total: " + pontos

    // Calcula o valor das metas
    //Recupera a cor da equipe
    let cor = document.getElementById("cor").value
    let metaProva1
    if (cor == 'amarela') {
        metaProva1 = 54
    }
    else if (cor == 'cinza') {
        metaProva1 = 51
    }
    else if (cor == 'laranja') {
        metaProva1 = 21
    }
    else if (cor == 'marrom') {
        metaProva1 = 88
    }
    else if (cor == 'preta') {
        metaProva1 = 60
    }

    alert(cor)
    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
    if (kitAlimentacao >= metaProva1) {
        pontos = pontos + 5000 // Já garantiu o 5000 pontos
        if (kitAlimentacao > 60) {
            pontos = pontos + (5000 / 60) * (kitAlimentacao - 60) * 83.33
        }
    }
    else {
        pontos = pontos + (5000 / 60) * (kitAlimentacao * 83.33)
    }
}