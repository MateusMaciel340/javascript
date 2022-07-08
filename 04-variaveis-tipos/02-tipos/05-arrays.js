// Arrays

/*
 * Lista iterável de elementos 
 * [0] -------------------------------------------- [20]?
 * First index, element (at index 20), indices e array length is 21
 */

let array = [];
console.log(array);

// Adicionar um item no meu array
console.log(array.push(3));
console.log(array.push(2));
console.log(array);

// Retirar o último item do array
console.log(array.pop());
console.log(array);

console.log(array.push(2), array.push(5));
console.log(array);

// Retirar o primeiro indice do array
console.log(array.shift());
console.log(array);

// Adicionar ao primeiro indice do array
console.log(array.unshift(67));
console.log(array);


console.log("Na estrutura de repetição!");
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// Se todas as minhas entradas são do número 5
console.log(array.every(item => 5 === 5));

// Como saber se uma dessas entradas são 5
console.log(array.some(item => 5 === 5));

// Reverter o array
console.log(array);
console.log(array.reverse());