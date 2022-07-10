// For 

// Loop dentro de elementos iteráveis (arrays, strings)

function multiplicaPorDois(arr){
    let multiplicados = [];

    for(let i = 0; i < arr.length; i++){
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];
console.log(multiplicaPorDois(meusNumeros)); // [4, 66, 912, 712, 80]

// For ...in

// Loop entre propriedades enumeráveis de um objeto

// Exemplo 01
function ForInExemplo(obj){
    for(prop in obj){
        console.log(prop);
    }
}

const meuObjeto = {
    nome: "João",
    idade: 20, 
    cidade: "Salvador"
}

ForInExemplo(meuObjeto);
// nome
// idade
// cidade

// Exemplo 02
function ForInExemploDois(obj){
    for(prop in obj){
        console.log(obj[prop]);
    }
}

const meuObjetoDois = {
    nome: "Mateus",
    idade: 21,
    cidade: "Fortaleza"
}

ForInExemploDois(meuObjetoDois);
// Mateus
// 21
// Fortaleza


// For ...of

// Loop entre estrututas iteráveis (arrays, strings)

function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}

const palavra = "abacaxi";
logLetras(palavra); //a //b //a //c //a //x //i

// Exemplo 02

function logNumeros(nums){
    for(num of nums){
        console.log(num);
    }
}

const nums = [30, 20, 233, 2];
logNumeros(nums); // 30 // 20 // 233 // 2


/* ----------------------------------------------------------------------------------- */

// While

// Executa instruções até que a condição se torne falsa.

function exemploWhile(){
    let num = 0;

    while(num <= 5){
        console.log(num);
        num++;
    }
}

exemploWhile(); //0 //1 //2 //3 //4 //5

// Do While

// Executa instruções até que a condição se torne falsa.
// Porém a primeira execução sempre ocorre.

// Exemplo 01

function exemploDoWhile(){
    let num = 0;

    do{
        console.log(num);
        num++;
    }while(num <= 5)
}

exemploDoWhile(); //0 //1 //2 //3 //4 //5

// Exemplo 02

function exemploDoWhile(){
    let num = 6;

    do{
        console.log(num);
        num++;
    }while(num <= 5)
}

exemploDoWhile();