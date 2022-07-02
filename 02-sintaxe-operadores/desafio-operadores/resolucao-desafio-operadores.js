function FuncaoOperadores(numero1, numero2){
    if(numero1 == numero2 && numero1){
        console.log(`
            Os números ${numero1} e ${numero2} são iguais. Sua soma é ${numero1 + numero2},
            ${(numero1 + numero2 > 10) ? "que é menor" : "que é maior"} que 10 e ${(numero1 + numero2) < 20 ? "maior" : "menor"} que 20
        `);
    }else{
        console.log(`
            Os números ${numero1} e ${numero2} não são iguais. Sua soma é ${numero1 + numero2},
            ${(numero1 + numero2 > 10) ? "que é maior" : "que é menor"} que 10 e ${(numero1 + numero2) < 20 ? "menor" : "maior"} que 20
        `);
    }
}

FuncaoOperadores(12, 1);