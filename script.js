//your JS code here. If required.
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

calculate.addEventListener("click", function () {
    let a = Number(num1.value);
    let b = Number(num2.value);
    let answer;

    switch (operator.value) {
        case "+":
            answer = a + b;
            break;

        case "-":
            answer = a - b;
            break;

        case "*":
            answer = a * b;
            break;

        case "/":
            answer = a / b;
            break;
    }

    result.textContent = answer;
});

document.getElementById("change_text").addEventListener("click", function () {
    const newTexts = ["Bye", "Good Bye", "To", "Your", "Class"];
    const divisions = document.querySelectorAll(".division");

    divisions.forEach(function (division, index) {
        division.textContent = newTexts[index];
    });
});