let currentNumber = document.getElementById("currentNumber");

document.querySelector("#counter #subtrair").addEventListener("click", function(){
    let number = parseInt(currentNumber.textContent) - 1;
    currentNumber.textContent = number;
});

document.querySelector("#counter #adicionar").addEventListener("click", function(){
    let number = parseInt(currentNumber.textContent) + 1;
    currentNumber.textContent = number;
});