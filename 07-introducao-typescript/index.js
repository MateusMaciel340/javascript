// Exemplos das vantagens do TypeScript

// Chamada de função - JavaScript

function soma(a, b){
    return a + b;
}

console.log("Parte 01:");
console.log(soma(1, 2)); //3
console.log(soma("a", "b")); //ab

// Chamada de função com typeof - JavaScript

function dividir(a, b){
    if(typeof a === "number" && typeof b === "number"){
        return `${a} e ${b} são valores numericos, sendo divisão ${a/b}.`
    }else{
        return `Os valores solicitados não são numericos!`;
    }
}

console.log("Parte 02:");
console.log(dividir(1, 2)); //0.5
console.log(dividir("a", "b")); // Nan ou mensagem de erro!