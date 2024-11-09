// SELETORES JAVASCRIPT 
const firstNumber = document.getElementById("first");
const secondNumber = document.getElementById("second");
const trirdNumber = document.getElementById("third");
const button = document.getElementById("resposta");
const div = document.getElementById("div");

// DECLARAÇÃO DE FUNÇÃO
function higherNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        div.innerHTML = `O maior numero entre os três é ${num1}`;
    } else if (num2 > num1 && num2 > num3) {
        div.innerHTML = ` O maior número entre os três é ${num2}`;
    } else {
        div.innerHTML = `O maior numero entre os três é ${num3}`;
    }
}

// ESCULTADOR DE EVENTOS
button.addEventListener("click", () => higherNumber(parseInt(firstNumber.value), parseInt(secondNumber.value), parseInt(trirdNumber.value))); 
