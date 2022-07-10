// Alunos Aprovados

const alunos = [{
    nome: "João", nota: 5, turma: "1B"
},{
    nome: "Sofia", nota: 9, turma: "1B"
},{
    nome: "Paulo", nota: 6, turma: "2C"
},{
    nome: "José", nota: 3, turma: "2C"
}];

function AlunosAprovados(arr, media){
    let aprovados = [];

    for(let i = 0; i < arr.length; i++){

        const { nota, nome } = arr[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(AlunosAprovados(alunos, 5));

// Calcular Idade

function CalcularIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade!`;
}

const pessoa1 = {
    nome: "Marcos",
    idade: 34
};

const pessoa2 = {
    nome: "Julia",
    idade: 16
};

const animal = {
    nome: "Fiona",
    idade: 2,
    raca: "Pug"
};

// Call
console.log(CalcularIdade.call(pessoa2, 30));
console.log(CalcularIdade.call(animal, 7));

// Apply
console.log(CalcularIdade.apply(pessoa2, [4]));