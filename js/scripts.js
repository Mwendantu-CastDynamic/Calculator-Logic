function add(number1, number2){
return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

let number1 = parseInt(prompt(`Enter the 1st number`))
let number2 = parseInt(prompt(`Enter the 2nd number`))


let result = divide(number1, number2)
alert(result);
