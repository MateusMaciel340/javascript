let numero_1_igual = 6;
let numero_2_igual = 5;

let numero_1_diferente = 6;
let numero_2_diferente = 5;

// && -> e
if(numero_1_igual == numero_2_diferente && numero_2_igual == numero_1_diferente){
    // 6 == 5 e 5 == 6 (Não)
    console.log(
        `${numero_1_igual} é igual ao ${numero_2_diferente} e ${numero_2_diferente}
            é igual ao ${numero_1_diferente}`
    );
}else{
    console.log(`
        Um dos valores acima não são iguais!
    `)
}

// || -> ou
if(numero_1_igual != numero_2_diferente || numero_2_igual == numero_1_diferente){
    // 6 != 5 ou 5 != 6
    console.log(`
        ${numero_1_igual} é diferente do ${numero_2_diferente} ou ${numero_2_igual} 
            é diferente do ${numero_1_diferente}
    `);
}else{
    console.log("Os valores acima são iguais!");
}

// ! -> não
if(!(numero_1_igual == numero_1_diferente) || !(numero_2_igual == numero_2_diferente)){
    console.log(`
        É falso que ${numero_1_igual} é igual ao ${numero_1_diferente} e ${numero_1_igual} é igual ao ${numero_2_diferente}
    `);
}else{
    console.log(`
        É verdadeiro que ${numero_1_igual} é igual ao ${numero_1_diferente} e ${numero_1_igual} é diferente de ${numero_2_diferente}
    `)
}