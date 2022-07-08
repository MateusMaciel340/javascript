// Objetos

// Estrutura tipo "chave e valor"


let person = {
    name: "Mateus", age: 20 /* keys e values */
};

console.log(person);
console.log(typeof person);

// Exemplos da aula
let objeto = {
    nome: "Ricardo"
};
console.log(objeto, typeof objeto);

// Adicionando propriedades e valores no objeto
objeto.idade = 20;
console.log(objeto);

// Valores desse objeto
console.log(Object.values(objeto));

// Keys desse objeto
console.log(Object.keys(objeto));

let pessoa = {
    nome: "Carlos", 
    idade: 23, 
    adress: "Rua Wilson Paulo"
}

console.log(pessoa.nome);
console.log(pessoa["nome"], pessoa["idade"], pessoa["adress"]);

console.log(pessoa["numberOfSiblings"] = 3);
console.log(pessoa);

let mom = "nameOfMom";
console.log(pessoa[mom] = "Marta");
console.log(pessoa);