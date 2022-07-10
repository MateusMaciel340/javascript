// Manipulando seu valor - Métodos do this

// Call

const pessoa = {
    nome: "Miguel",
};

const animal = {
    nome: "Murphy",
};

function getSomething(){
    console.log(this.nome);
}

getSomething.call(pessoa);

// Exemplo 02

/*
 * É possível passar parâmetros para essa função separando-os por vírgulos
 */

const myObj = {
    num1: 2, 
    num2: 4
};

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5); // 12

/* ----------------------------------------------------------------------------------- */

// Apply

const pessoa_segundo = {
    nome: "Miguel"
};

const animal_segundo = {
    nome: "Godi"
};

function getSomethingTwo(){
    console.log(this.nome);
}

getSomethingTwo.apply(pessoa_segundo);
getSomethingTwo.apply(animal_segundo);

/*
 * Apply: é possível passar parâmetros para essa função dentro de um array.
 */

const myObjApply = {
    num1: 2,
    num2: 4
};

function somaApply(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

somaApply.apply(myObjApply, [1, 5]); //12

/* ----------------------------------------------------------------------------------- */

// Bind

/*
 * Clona a estrutura da função onde é chamada e aplica o valor do objeto passado
   como parâmetro
 */

const retornaNomes = function(){
    return this.nome;
}

let bruno = retornaNomes.bind({ nome: "Bruno" });

console.log(bruno()); // Bruno