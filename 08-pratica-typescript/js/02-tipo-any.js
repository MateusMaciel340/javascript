"use strict";
var valorAny;
valorAny = 3;
valorAny = "Olá";
valorAny = true;
var valorString = "teste";
valorString = valorAny;
var valorString2 = "testão";
valorString2 = valorAny;
function SomarStrings(string1, string2) {
    console.log(string1 + string2);
}
SomarStrings(valorString, valorString2);
SomarStrings("Olá, ", "meu amigo!");
