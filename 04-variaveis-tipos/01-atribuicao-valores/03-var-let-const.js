// Var, let e const

/*
 * ------------------- var ----------------- const ----------------------- let
 * escopo ------------ global ou local------ bloco ----------------------- bloco
 * redeclarar -------- sim ----------------- não ------------------------- não
 * reatribuir -------- sim ----------------- não ------------------------- sim
 * hoisting ---------- sim ----------------- não ------------------------- não
 */


// Exemplos - Var
var name_user = "Mateus";
var last_name_user = "Maciel";

if(name_user && last_name_user !== ""){
    var name_user = "João";
    let last_name_user = "Oliveira";
}

console.log("Fora do escopo: " + name_user + " " + last_name_user);

// Exemplos - Let
var course = "Variáveis e Tipos";

if(course !== ""){
    let teacher = "Stephany Nusch";
    console.log("O nome do seu curso é " + course);
    console.log("Sendo sua professora: " + teacher);
}

// Exemplos - Const
const DECLARED_ONCE = "Declarar apenas uma vez";
console.log(DECLARED_ONCE);

/*
 * Não pode ser declarada novamente
 * Não pode ter um novo valor atribuido
 * Não pode não ter um valor atribuido anteriormente
 */