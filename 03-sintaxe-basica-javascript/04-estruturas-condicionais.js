// Estruturas de decisão

// If | else if | else
var jogador1 = 0; var jogador2 = 0;
var placar;

// If Ternário 
jogador1 != 1 && jogador2 != 1 ? console.log("Os jogadores são válidos") :
console.log("Jogadores Inválidos");

// Usando if 
if(jogador1 > 0 && jogador2 == 0){
    console.log("Jogador 1 marcou ponto!");
    placar = jogador1 > jogador2;
}
// Usando else if
else if(jogador2 > 0 && jogador1 == 0){
    console.log("Jogador 2 marcou ponto!");   
    placar = jogador2 > jogador1;
}
// Usando else
else{
    console.log("Ninguém marcou ponto!");
}

// Switch/case
switch (placar){
    case placar = jogador1 > jogador2 :
        console.log("Jogador 1 ganhou");
        break;
    case placar = jogador2 > jogador1 :
        console.log("Jogador 2 ganhou");
        break;
    default: console.log("Ninguém ganhou!");
}

// Estruturas de repetição

// For - Executa uma instrução até que ela seja falsa
let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];
let object = {
    propriedade1: "valor1", propriedade2: "valor2",
    propriedade3: "valor3"
}

// number
for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
}

// For in - Funciona como uma repetição a partir de uma propriedade (string)
for(let i in array){
    console.log(i);
}

// Com object
for(i in object){
    console.log(i);
}

// For/of - Executa repetição a partir de valor
for(i of array){
    console.log(i);
}

// com object
for(i of object.propriedade1){
    console.log(i);
}

// While - Executa uma instrução enquanto determinada condição for verdadeira, a verificação é feita antes da execução

var a = 0;

while(a < 10){
    a ++;
    console.log(a);
}

// Do/While - Executa uma instrução "até que" determinada condição seja falsa, a verificação é feita depois da execução

do {
    a++;
    console.log(a);
}while(a < 10)