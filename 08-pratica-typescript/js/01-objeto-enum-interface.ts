const pessoa = {
    nome: "Mariana", //string
    idade: 28, //number
    profissao: "Desenvolvedora" //string
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: "André",
    idade: 25,
    profissao: "Pintor"
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: "Paula",
    idade: 25,
    profissao: "Pintor"
}

enum Profissao {
    Professora, 
    Atriz,
    Desenvolvedora,
    Jogadora
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materiais: string[]
}

const vanessa: Pessoa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: "Maria",
    idade: 34,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: "Jéssica",
    idade: 42,
    profissao: Profissao.Desenvolvedora,
    materiais: ["Matemática discreta", "Programação"]
}

const monica: Estudante = {
    nome: "Mônica",
    idade: 25,
    materiais: ["Matemática discreta", "Programação"]    
}

function listar(lista: string[]){
    for(const item of lista){
        console.log("- ", item);
    }
}

listar(monica.materiais);