"use strict";
var botao = document.getElementById("botao");
var valor1 = document.getElementById("valor1");
var valor2 = document.getElementById("valor2");
function adicionarNumeros(numero1, numero2, devePrintar, frase) {
    var resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2;
}
var devePrintar = true;
var frase = "O valor é: ";
if (botao) {
    botao.addEventListener("click", function () {
        if (valor1 && valor2) {
            console.log(adicionarNumeros(Number(valor1.value), Number(valor2.value), devePrintar, frase));
        }
    });
}
