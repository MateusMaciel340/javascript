// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLInputElement;

campoSaldo.innerHTML = "";

function somarAoSaldo(soma: number) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', () => {
        if(soma){
            somarAoSaldo(Number(soma.value));
        }
    });
}

if(botaoLimpar){
    botaoLimpar.addEventListener('click', () => {
        limparSaldo();
    });
}
