// 01 - Utilização de módulos

// 1.1 - O que são módulos?

// O que são módulos? Módulos arquivos JavaScript que tem a capacidade de exportar 
// e importar informações de outros arquivos do mesmo tipo.

// 1.2 - Algumas vantagens são:

/* Organização do código
 * Compartilhamento de variáveis em escopos diferentes.
 * Explicita as dependências dos arquivos.
 */

// Exportar - Named Exports

export function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

export function mostraCidade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.cidade}`;
}

export function mostrarHobby(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.hobby}`;
}