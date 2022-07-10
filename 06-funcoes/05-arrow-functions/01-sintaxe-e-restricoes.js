// Sintaxe e outras restrições - Arrow Functions

const helloWorld = function(){
    return "Hello World!";
}

const helloWorld2 = () => {
    return "Hello World 2";
}

const HelloWorld3 = () => "Hello World 3";

console.log(
    helloWorld() + " / " + helloWorld2() + " / " + HelloWorld3()
);


// Sintaxe

/*
 * Caso exista apenas uma linha, pode dispensar as chaves e o return.7
 * Caso exista apenas um parâmetro, pode dispensar os parânteses
 */

const soma = (a, b) => a + b;
console.log(soma(4, 6)); //10

const soma2 = a => a;
console.log(soma2(4)); //4

// Arrow function NÃO faz hoisting!

// Funciona - [v]
console.log(soma(2, 4));
function soma(a, b){
    return a + b;
}

// Não funciona [x]
console.log(soma(2, 4));
const soma = (a, b) => a + b;

/*
 * Outras restrições:
 * "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar.
 * Não existe objeto "arguments".
 * O construir (ex: new MeuObjeto()) também não pode ser utilizado
 */