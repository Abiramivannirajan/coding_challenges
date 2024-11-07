// Write a program to perform addition, subtraction, multiplication and division of two numbers.
// Expected Output :
// Input any two numbers separated by comma : 10,5
// The sum of the given numbers : 15
// The difference of the given numbers : 5
// The product of the given numbers : 50
// The quotient of the given numbers : 2.000000
// Simple calculator function
function Calculate() {
    var num1 = 10;
    var num2 = 5;
    var sum = num1 + num2;
    var difference = num1 - num2;
    var product = num1 * num2;
    var quotient = num2 !== 0 ? num1 / num2 : "Undefined (division by zero)";
    console.log("Sum: ".concat(sum));
    console.log("Difference: ".concat(difference));
    console.log("Product: ".concat(product));
    console.log("Quotient: ".concat(quotient));
}
Calculate();
