let botao = document.getElementById("botao");
let valor1 = document.getElementById("valor1") as HTMLInputElement;
let valor2 = document.getElementById("valor2") as HTMLInputElement;

function adicionarNumeros(numero1: number, numero2: number, devePrintar: boolean, frase: string){
    let resultado = numero1 + numero2;
    if(devePrintar){
        console.log(numero1 + numero2);
    }
    return numero1 + numero2;
}

let devePrintar = true;
let frase = "O valor é: ";

if(botao){
    botao.addEventListener("click", () => {
        if(valor1 && valor2){
            console.log(
                adicionarNumeros(Number(valor1.value), Number(valor2.value), devePrintar, frase)
            );
        }
    });
}