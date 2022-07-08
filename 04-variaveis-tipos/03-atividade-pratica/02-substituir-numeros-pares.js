function SubstituirPares(array){

    if(!array) return -1;
    if(!array.length) return -1;

    for(let index = 0; index < array.length; index++){
        if(array[index] === 0){
            console.log("Você já é 0!");
        }else if(array[index] % 2 === 0){
            console.log(`Substituindo ${array[index]} por 0...`);
            array[index] = 0;
        }
    }
    return array;
}
let array = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(SubstituirPares(undefined));