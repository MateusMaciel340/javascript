let botao = document.getElementById("botao");
let valor1 = document.getElementById("valor1") as HTMLInputElement;
let valor2 = document.getElementById("valor2") as HTMLInputElement;

function adicionarNumeros(numero1: number, numero2: number){
    return numero1 + numero2;
}

if(botao){
    botao.addEventListener("click", () => {
        if(valor1 && valor2){
            console.log(
                adicionarNumeros(Number(valor1.value), Number(valor2.value))
            );
        }
    });
}