let botao = document.getElementById("botao");
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

function somarNumeros(numero1, numero2){
    if(typeof numero1 == "number" && typeof numero2 == "number"){
        return numero1 + numero2;
    }else{
        return Number(numero1) + Number(numero2);
    }
}

botao.addEventListener("click", () => {
    console.log(somarNumeros(valor1.value, valor2.value));
});