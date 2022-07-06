// O que são vetores ou arrays?

// Como declarar um array
let array = ["string", 1, true];
console.log(array);

// Pode aguardar vários tipos de dados
array = ["string", 1, true, ["array1"], ["array2"], ["array3"], ["array4"]];
console.log(array[3]);

// ForEach - itera um array
array.forEach(function(item, index){ console.log(index, item); })

// push - Adicionar item no final do array
array.push("novo item");
console.log(array);

// pop - Remove um item no final do array
array.pop();
console.log(array);

// shift - Remove um item no início do array
array.shift();
console.log(array);

// unshift - Adiciona item no início do array
array.unshift("Item no inicio!");
console.log(array);

// indexOf - retorna o índice de um valor
console.log(array.indexOf(true));

// splice - remove ou substitui um item pelo índice
array.splice(0, 3);
console.log(array);

// slice - retorna uma parte de um array existente
let novo_array = array.slice(0, 3);
console.log(novo_array);

// Objetos

// Maneiras de acessar as propriedades dos objetos
let object = { 
    string: "string", number: 1, boolean: true, array: ["array"], 
    objectInterno: "Objeto interno" }
console.log(object.objectInterno);

// Desestruturação de objetos - 01
var string = object.string;
console.log(string);

array = object.array;
console.log(array);

// Desestruturação de objetos - 02
var { string, boolean, objectInterno } = object;
console.log(string, boolean, objectInterno);