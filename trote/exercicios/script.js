function churras(){
    let convidados = Number(document.getElementById("convidados"). value)
    let total = convidados * 400 // está em gramas
    let totalkg =  total / 1000 // em kg
    document.getElementById("resultadoCarne").innerText=
    "total em KG " + totalkg.toFixed(2)
}