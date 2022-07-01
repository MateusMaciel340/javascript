let currentNumber = document.getElementById("currentNumber");

document.querySelector("#counter #subtrair").addEventListener("click", function(){
    let number = parseInt(currentNumber.textContent) - 1;
    currentNumber.textContent = number;

    if(number < 0){
        document.getElementById("currentNumber").style.color = "red";
    }

    if(number == 0){
        document.getElementById("currentNumber").style.color = "black";
    }
});

document.querySelector("#counter #adicionar").addEventListener("click", function(){
    let number = parseInt(currentNumber.textContent) + 1;
    currentNumber.textContent = number;

    if(number > 0){
        document.getElementById("currentNumber").style.color = "green";
    }

    if(number == 0){
        document.getElementById("currentNumber").style.color = "black";
    }
});