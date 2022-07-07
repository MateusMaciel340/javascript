// Atribuição de Valores

/*
 * Case Type ----------------------------------------------------- Example
   [Original Variable as String]---------------------------------- some awesome var
   [Camel Case] -------------------------------------------------- someAwesomeVar
   [Snake Case] -------------------------------------------------- some_awesome_var
   [Kebab Case] -------------------------------------------------- some-awesome-var
   [Pascal Case] ------------------------------------------------- SomeAwesomeVar
   [Upper Case Snake Case] --------------------------------------- SOME_AWESOME_VAR
 */

// Var e let

// Var e let tem escopos diferentes [Var fora e dentro, e let somente dentro]

var a = 1;
var b = 2;

if(a === 1){
    var a = 11; // The scope is global
    let b = 22; // The scope is inside the if-block

    console.log(a); // 11
    console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2

// Exemplos

// Posso declarar a mesma variáveis mais de uma vez!
var numberOne = 1;
console.log(numberOne);

var numberOne = 1.1;
console.log(numberOne);


// Posso reatribuir um novo valor para o var diversas vezes também!
numberOne = 1.11;
console.log(numberOne);

// Let pode ser declarada apenas uma vez, mas pode ser reatribuir outra vez!
let numberTwo = 2;
console.log(numberTwo);

numberTwo = 2.2;
console.log(numberTwo);

// Exemplos práticos de var e let

var firstName = "Mateus";
var lastName = "Maciel";

if(firstName === "Mateus"){
    // Var -> dentro e fora do escopo
    var firstName = "Ricardo";

    // Let -> Apenas dentro do escopo
    let lastName = "Oliveira";
    console.log(lastName);
}

console.log(firstName, lastName);