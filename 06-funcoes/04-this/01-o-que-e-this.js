// This: o que é?

/*
 * A palavra reservada this é uma referência de contexto.
 * No exemplo, this refere-se ao objeto pessoa
 */

const pessoa = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function(){
        return this.firstName + " " + this.lastName; 
    },
    getId: function(){
        return this.id;
    }
};

console.log(pessoa.fullName()); // "André Soares"
console.log(pessoa.getId()); //1

// Seu valor pode mudar de acordo com o lugar no código onde foi chamada

/*
 * Contexto ---------------------------------------------- Referência
 * Em um objeto (método) ----------------------- Próprio objeto dono do método
 * Sozinha ---------------------------------- Objeto global (em navegadores, window)
 * Função ------------------------------------------------ Objeto global
 * Evento ----------------------------------------- Elemento que recebeu o evento
 */


// Fora de função
console.log(this);

// Dentro de uma função
(function(){
    console.log(this);
})

// Dentro de um objeto (método)

const pessoa_segunda = {
    firstName: "Diego",
    lastName: "Vieira",
    getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    },
}

pessoa_segunda.getFullName();