"use strict";
var pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "Desenvolvedora" //string
};
pessoa.idade = 25;
var andre = {
    nome: "André",
    idade: 25,
    profissao: "Pintor"
};
var paula = {
    nome: "Paula",
    idade: 25,
    profissao: "Pintor"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Jogadora"] = 3] = "Jogadora";
})(Profissao || (Profissao = {}));
var vanessa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
var maria = {
    nome: "Maria",
    idade: 34,
    profissao: Profissao.Desenvolvedora
};
var jessica = {
    nome: "Jéssica",
    idade: 42,
    profissao: Profissao.Desenvolvedora,
    materiais: ["Matemática discreta", "Programação"]
};
var monica = {
    nome: "Mônica",
    idade: 25,
    materiais: ["Matemática discreta", "Programação"]
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log("- ", item);
    }
}
listar(monica.materiais);
