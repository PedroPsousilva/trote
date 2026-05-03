function calcular(){

    // ===== ITENS AVULSOS =====
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value) || 0
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value) || 0
    let qtdeOleo = Number(document.getElementById("qtdeOleo").value) || 0
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value) || 0

    let pontosItens = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)

    let pontos = pontosItens

    //  COR DA EQUIPE 
    let cor = document.getElementById("cor").value
    let metaProva1

    if (cor == "amarela") metaProva1 = 54
    else if (cor == "cinza") metaProva1 = 51
    else if (cor == "laranja") metaProva1 = 21
    else if (cor == "marron") metaProva1 = 88
    else if (cor == "preta") metaProva1 = 60

    // KIT ALIMENTAÇÃO 
    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value) || 0
    let pontosKit = 0

    if (kitAlimentacao >= metaProva1) {
        pontosKit = 5000
        if (kitAlimentacao > metaProva1){
            pontosKit += (kitAlimentacao - metaProva1) * (5000/metaProva1)
        }
    } else {
        pontosKit = kitAlimentacao * (5000/metaProva1)
    }

    pontos += pontosKit

    //  META SUPLEMENTO 
    let metaSuplemento = (metaProva1 % 2 == 0) ? metaProva1/2 : Math.ceil(metaProva1/2)

    let qtdeLatas = Number(document.getElementById("qtdeLatas").value) || 0
    let pontosSuplemento = 0

    if(qtdeLatas >= metaSuplemento){
        pontosSuplemento = 5000
        if(qtdeLatas > metaSuplemento){
            pontosSuplemento += (qtdeLatas - metaSuplemento) * (5000/metaSuplemento)
        }
    } else {
        pontosSuplemento = qtdeLatas * (5000/metaSuplemento)
    }

    pontos += pontosSuplemento

    //  LEITE 
    let qtdeLeites = Number(document.getElementById("qtdeLeites").value) || 0
    let pontosLeite = 0

    if (qtdeLeites >= metaProva1) {
        pontosLeite = 5000
    } else {
        pontosLeite = qtdeLeites * (5000/metaProva1)
    }

    pontos += pontosLeite

    // DOAÇÃO DE SANGUE 
    let qtdeDoacoes = Number(document.getElementById("qtdeDoacoes").value) || 0
    let pontosSangue = 0

    if (qtdeDoacoes >= 30) {
        pontosSangue = 3000
    } else {
        pontosSangue = qtdeDoacoes * 100
    }

    pontos += pontosSangue

    //  BÔNUS
    if (
        kitAlimentacao >= metaProva1 &&
        qtdeLatas >= metaSuplemento &&
        qtdeLeites >= metaProva1
    ) {
        pontos += 2000
    }

    // RESULTADO 
    document.getElementById("resultado").innerHTML = `
        <strong>Total: ${pontos.toFixed(2)} pontos</strong><br>
        Itens: ${pontosItens.toFixed(2)}<br>
        Kit: ${pontosKit.toFixed(2)}<br>
        Suplemento: ${pontosSuplemento.toFixed(2)}<br>
        Leite: ${pontosLeite.toFixed(2)}<br>
        Sangue: ${pontosSangue.toFixed(2)}
    `
}
document.addEventListener("DOMContentLoaded", () => {

    const imagens = [
        "ft.jpeg",
        "ft2.png",
        "ft3.png"
    ];

    let index = 0;
    const carrossel = document.getElementById("carrossel");

    setInterval(() => {
        index++;
        if (index >= imagens.length) {
            index = 0;
        }
        carrossel.style.opacity = 0;

        setTimeout(() => {
            carrossel.src = imagens[index];
            carrossel.style.opacity = 1;
        }, 300);

    }, 3000);

});
