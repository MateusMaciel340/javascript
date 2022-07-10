// Estrutura e função anônima

/*
 * Variáveis criadas dentro de uma função apenas podem ser utilizadas dentro
   dela.
 */

function nome(parametro){
    // instruções
}

/*
 * Quando invocamos o "return", a função para de ser executada.
 */

function nome(parametro){
    // instruções
    return; // valor de retorno
}

// Função Anônima

/*
 * Uma variável pode armazenar uma função.
 */

const soma = function (a, b){
    return a + b;
}

soma(1, 2); // 3
soma(5,4); // 9