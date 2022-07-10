// If/else

/*
 * Declaração 01 (dentro do if): Ocorre caso a condição seja verdadeira.
 * Declaração 02 (dentro do else): Ocorreu caso a condição seja falsa.
 */

function numeroPositivo(num){
    let resultado;

    if(num < 0){
        resultado = false;
    }else{
        resultado = true;
    }

    return resultado;
}

console.log(numeroPositivo(2)); // true
console.log(numeroPositivo(-9)); // false

// Mais exemplos 

// Exemplo 01 

function numeroPositivoSegundo(num){
    let resultado;

    const ehNegativo = num < 0;

    if(ehNegativo){
        resultado = false;
    }else{
        resultado = true;
    }

    return resultado;
}

// Exemplo 02

function numeroPositivoTerceiro(num){
    const ehNegativo = num < 0;

    if(ehNegativo){
        return false;
    }

    return true;
}

// JavaScript não tem elseif, as palavras sempre estão espaçadas!

function numeroPositivoQuarto(num){
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if(ehNegativo){
        return "Esse número é negativo!";
    }else if(!ehNegativo && maiorQueDez){
        return "Esse número é positivo e maior que 10!";
    }

    return "Esse número é positivo";
}

console.log(numeroPositivoQuarto(2));
console.log(numeroPositivoQuarto(-2));
console.log(numeroPositivoQuarto(40));

// Swicth/case

/*
 * Equivale a uma comparação de tipo e valor (===)
 * Sempre precisa de um valor "default"
 * Ideal para quando se precisa comparar muitos valores
 */

function getAnimal(id){
    switch(id){
        case 1: 
            return "cão";
        case 2: 
            return "gato";
        case 3: 
            return "passáro";
        default:
            return "peixe";
    }
}

console.log(
    getAnimal(1) + " - " + getAnimal(4) + " - " + getAnimal("1")
); // cão // peixe // peixe