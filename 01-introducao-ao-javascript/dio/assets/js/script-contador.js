let currentNumber = document.getElementById("currentNumber");

document.querySelector("#counter #subtrair").addEventListener("click", function(){
    let number = parseInt(currentNumber.textContent) - 1;
    currentNumber.textContent = number;

    if(number <= 0){
        document.getElementById("subtrair").disabled = true;
        document.getElementById("subtrair").style.background = "#ccc";
    }
});

document.querySelector("#counter #adicionar").addEventListener("click", function(){
    let number = parseInt(currentNumber.textContent) + 1;
    currentNumber.textContent = number;

    if(number >= 10){
        document.getElementById("adicionar").disabled = true;
        document.getElementById("adicionar").style.background = "#ccc";
    }
});