const getUserInput = () => {
  let num1 = +prompt("Enter a num: ");
  let num2 = +prompt("Enter a num: ");
  let operation = prompt(`What operation do you want to perform? 
  options('+', '-', '*', '/')
  `);
  return [num1, num2, operation];
};
function showResult() {
  do {
    const [num1, num2, operation] = getUserInput();
    let result;
    if (operation === "+" || operation.includes("add")) {
      result = num1 + num2;
      alert(`Addition of ${num1} and ${num2} is ${result}`);
      break;
    } else if (operation === "-" || operation.includes("subtract")) {
      result = num1 - num2;
      alert(`Subtraction of ${num2} from ${num1} is ${result}`);
      break;
    } else if (operation === "*" || operation.includes("multiply")) {
      result = num1 * num2;
      alert(`${num1} times ${num2} is ${result}`);
      break;
    } else if (operation === "/" || operation.includes("divide")) {
      result = num1 / num2;
      alert(`Division of ${num1} by ${num2} is ${result}`);
      break;
    } else {
      alert(`You didn't specify a valid operation, 
      options('+': add, '-': subtract, '*': multiply, '/': divide)
      Try again.
      `);
    }
  } while (true);
}
showResult();
