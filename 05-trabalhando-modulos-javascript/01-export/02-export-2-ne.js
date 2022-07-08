// Exportar - Named Exports

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
    mostraCidade, 
    mostraIdade,
    mostraHobby
}