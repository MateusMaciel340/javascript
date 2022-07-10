// Função autoinvocável

// IIFE (Immediately Invoked Function Expression)

/*
 * Uma função anônima entre parênteses, seguida por outro par de parênteses,
   que representa sua chamada.
 */

(
    function(){
        let name = "Digital Innovation One";
        return name;
    }
)();

/*
 * Também pode ser utilizada com parâmetros ou armazenada em uma variável
 */

// Exemplos 01

(
    function(a, b){
        return a + b;
    }
)(1, 2); // 3

// Exemplo 02

const soma3 = (
    function(a, b){
        return a + b;
    }
)(1, 2);

console.log(soma3);


// Callbacks

// Uma função passada como argumento para outra.

/*
 * Utilizando callbacks, você tem maior controle da ordem de chamadas.
 */


const calc = function(operacao, numero1, numero2){
    return operacao(numero1, numero2);
}

const soma = function(numero1, numero2){
    return numero1 + numero2;
}

const sub = function(numero1, numero2){
    return numero1 - numero2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(soma, 1, 2);

console.log(resultSoma);
console.log(resultSub);