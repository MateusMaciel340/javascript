// Valores padrão

// Pré-ES2015

function exponencial(array, num){
    if(num === undefined){
        num = 1;
    }

    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(array[i] ** num);
    }

    return result;
}

exponencial([1, 2, 3, 4]);
// [1, 2, 3, 4]

exponencial([1, 2, 3, 4], 4);
// [1, 8, 27, 64]

/* ----------------------------------------------------------------------------------- */

// Pós-ES2015

function exponencial_segundo(array, num = 1){
    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(array[i] ** num);
    }

    return result;
}

exponencial_segundo([1, 2, 3, 4]);
exponencial_segundo([1, 2, 3, 4], 4);

// Objeto "arguments"

/*
 * Um array com todos os parâmetros passados quando a função foi invocada
 */

function findMax(){
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }

    return max;
}

console.log(findMax(1, 2, 3, 6, 90, 1));