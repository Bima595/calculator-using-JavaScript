document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("result");
    let buttons = document.getElementById("angka");
    let operand1 = "";
    let operand2 = "";
    let operator = "";

    buttons.addEventListener("click", function (e) {
        if (e.target.getAttribute("data-numbers") !== null) {
            display.innerHTML += e.target.innerHTML;
        } else if (e.target.id === "tambah" || e.target.id === "kurang" || e.target.id === "kali" || e.target.id === "bagi" || e.target.id === "modulus" || e.target.id === "pangkat") {
            operand1 = display.innerHTML;
            operator = e.target.innerHTML;
            display.innerHTML = "";
        } else if (e.target.id === "samadengan") {
            operand2 = display.innerHTML;
            display.innerHTML = calculate(operand1, operator, operand2);
            operand1 = display.innerHTML;
            operand2 = "";
            operator = "";
        } else if (e.target.id === "hapus1") {
            display.innerHTML = display.innerHTML.slice(0, -1);
        } else if (e.target.id === "hapusall") {
            display.innerHTML = "";
            operand1 = "";
            operand2 = "";
            operator = "";
        }
    });

    function calculate(operand1, operator, operand2) {
        operand1 = parseFloat(operand1);
        operand2 = parseFloat(operand2);

        switch (operator) {
            case "+":
                return operand1 + operand2;
            case "-":
                return operand1 - operand2;
            case "*":
                return operand1 * operand2;
            case "/":
                return operand1 / operand2;
            case "%":
                return operand1 % operand2;
            case "^":
                return Math.pow(operand1, operand2);
            default:
                return "Error";
        }
    }
});
