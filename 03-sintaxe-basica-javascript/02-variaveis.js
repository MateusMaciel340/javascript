// Tipos Primitivos

// Boolean
var verdadeiro_ou_falso = false;
console.log(verdadeiro_ou_falso);
console.log(typeof verdadeiro_ou_falso);

// Number
var numeroQualquer = 1;
console.log(numeroQualquer);
console.log(typeof numeroQualquer);

// String
var nome = "Mateus";
console.log(nome);
console.log(typeof nome);

// Variável
var segundo_nome = "João";
console.log(segundo_nome);
segundo_nome = "Paulo";
console.log(segundo_nome);

// Var -> escopo global e local
// Let -> escopo local de bloco
// Const -> escopo local de bloco

let variavel_dois = "Mateus";
variavel_dois = "Ricardo";
console.log(variavel_dois);

const constante = "Constante";
console.log(constante);

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}

escopoLocal();

// Atribuição
var atribuicao = "Mateus";

// Comparação
var comparacao = "0" == 0;
console.log(comparacao);

// Comparação Idêntica
var comparacaoIdentica = "0" === 0;
console.log(comparacaoIdentica); 

// Adição
var adicao = 1 + 1;
console.log(adicao);

// Subtração
var subtracao = 1 - 1;
console.log(subtracao);

// Multiplicação
var multiplicacao = 1 * 1;
console.log(multiplicacao);

// Divisão real
var divisao = 1 / 1;
console.log(divisao);

// Divisão inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// Potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

// Maior que
var maior = 5 > 2;
console.log(maior);

// Menor que 
var menor = 2 < 5;
console.log(menor);

// Maior ou igual
var maior_igual = 5 >= 5;
console.log(maior_igual);

// Menor ou igual
var menor_igual = 8 <= 2;
console.log(menor_igual);

// e
var e = true && false;
console.log(e);

// ou
var ou = true || false;
console.log(ou);

// não
var nao = !true;
console.log(nao);