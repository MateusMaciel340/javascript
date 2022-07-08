// Empty, undefined e null

/*
 * Empty: Foi declarado, mas não possui utilidade direta: 
 *      Ex: let nome = "" ou let numero = 0;
 * Null: Você desja que aquele determinado valor não venha existir
 *      Ex: let nome = null - para depois receber um valor dentro.
 * Undefined: Quando você não definir nenhum tipo de valor
 *      Ex: let nome; 
 */

// Undefined
let valor;
console.log(valor);
console.log(typeof valor);

if(valor == undefined ){
    console.log(`O valor do let da variável é ${valor}`);
}else{
    console.log(`O valor do let da variável é ${valor}`);
}

// Null
valor = null;
console.log(valor);
console.log(typeof valor);

if(valor == null){
    console.log(`O valor do let da variável é ${valor}`);
}else{
    console.log(`O valor do let da variável é ${valor}`);
}

// Valor number
valor = 89;
console.log(valor);
console.log(typeof valor);

if(valor == null && valor == undefined){
    console.log(`O valor do let da variável é ${valor}`);
}else{
    console.log(`O valor do let da variável é ${valor}`);
}