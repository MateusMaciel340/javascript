// Strings

/*
 * Utilizada em textos
 * Valores declarados entre aspas ou crases
 */

const DIO = "Digital Innovation One";

let firstName = "João";
let lastName = "Luiz";

let fullName = `Nome completo: ${firstName} ${lastName}`;
console.log(fullName);

// Exemplos - Aula

let nome = "Mateus";
let sobrenome = "Maciel";

// Concat
let concatencao = nome.concat(sobrenome);
console.log(concatencao);

// Length
console.log(concatencao.length);

// Quando as strings são objetos
let exemplo = new String("Olá, meus amigos");
console.log(typeof exemplo);
console.log(exemplo, exemplo.length);

// Quando for vazio
let vazio = "";
console.log(typeof vazio);

// Posição do let nome
console.log(nome[0]); // Posição de array
console.log(nome.length); // Quantidade

// Concantenado sendo alterado
concatencao = nome + " " + sobrenome;
console.log(concatencao);

concatencao = nome + "\n" + sobrenome;
console.log(concatencao);

// Template String - Concantenando
concatencao = `${nome} ${sobrenome}`;
console.log(concatencao);

concatencao = `${nome}
    ${sobrenome}`;
console.log(concatencao);

// Como capturar as palavras de uma frase
let frase = "Olá, tudo bem?";
console.log(frase.split("")); // palavra por palavra
console.log(frase.split(" ")); // frase por frase

// Minha frase apresenta alguma inclusão?
console.log(frase.includes("tudo"));
console.log(frase.includes("legal"));

// Ela começa através de qual?
console.log(frase.startsWith("O"));
console.log(frase.startsWith("P"));

// Ela termina através de qual?
console.log(frase.endsWith("?"));
console.log(frase.endsWith("K"));

// Alterar algo manualmente na frase
let stringModificada = frase.replace(",", "!");
console.log(stringModificada);