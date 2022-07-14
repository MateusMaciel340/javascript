"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = "";
function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}
function limparSaldo() {
    campoSaldo.innerHTML = '';
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        if (soma) {
            somarAoSaldo(Number(soma.value));
        }
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
