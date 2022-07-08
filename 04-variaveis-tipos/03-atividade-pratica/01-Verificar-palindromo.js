// Palíndromo

/*
 * Frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita
   ou vice-versa 
 */

// Solução 01
function VerificaPalindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

let myVar = null;

console.log(VerificaPalindromo(myVar));

// Solução 02

// Exemplo -> omo o -> [0] - m -> [1] - o -> [2]
function VerificaPalindromo2(string){
    if(!string) return "string inexistente";

    for(let index = 0; index < string.length / 2; index++){
        if(string[index] !== string[string.length - 1 - index]){
            return false;
        }
    }

    return true;
}

console.log(VerificaPalindromo2("gato"));