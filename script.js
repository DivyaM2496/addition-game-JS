let userInput = document.getElementById("userInput");
let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let messageElement = document.getElementById("gameResult");

function restart() {
    firstNumberElement.textContent = Math.ceil(Math.random() * 100);
    secondNumberElement.textContent = Math.ceil(Math.random() * 100);
    userInput.value = "";
    messageElement.textContent = "";

}
restart();

function check() {
    let number1 = parseInt(firstNumberElement.textContent);
    let number2 = parseInt(secondNumberElement.textContent);
    let result = parseInt(userInput.value);
    let sum = number1 + number2;
    if (sum === result) {
        messageElement.textContent = "Congratulations!You got it right.";
        messageElement.style.backgroundColor = "#028a0f";

    } else {
        messageElement.textContent = "Please Try Again!";
        messageElement.style.backgroundColor = "#1e217c";
    }
}
