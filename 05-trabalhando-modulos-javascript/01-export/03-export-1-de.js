// Exportar - Default Exports 

/*
 * Só pode haver um por arquivo.
 * Será o retorno padrão do seu arquivo.
 */

function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

function mostraCidade(pessoa){
    return `A idade de ${pessoa.nome} e ${pessoa.cidade}`;
}

function mostraHobby(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.hobby}`;
}

module.export = {
    mostraIdade,
    mostraCidade,
    mostraHobby
}