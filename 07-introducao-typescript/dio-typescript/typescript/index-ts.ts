// 01.7 - O que são Generic Types

// T -> normal
// any -> sem tipo por enquanto

function adicionaApendiceList<T>(array: any[], valor: T){
    return array.map(() => valor);
}

adicionaApendiceList([1, 2, 3], "d");