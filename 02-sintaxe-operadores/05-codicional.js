// Condicional Ternário

// (condition) ? expression : expression2

let numero1 = 7;
let numero2 = 8;

(numero1 !== numero2) ? console.log(
    `
        É verdadeiro que ${numero1} é diferente do ${numero2}
    `
) : console.log(`
        É falso que ${numero2} é igual ao ${numero2}
`);

// ou

if(numero1 !== numero2){
    console.log(`É verdadeiro que ${numero1} é diferente do ${numero2}`);
}else{
    console.log(`É falso que ${numero2} é igual ao ${numero2}`);
}