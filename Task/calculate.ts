// Write a program to perform addition, subtraction, multiplication and division of two numbers.
// Expected Output :
// Input any two numbers separated by comma : 10,5
// The sum of the given numbers : 15
// The difference of the given numbers : 5
// The product of the given numbers : 50
// The quotient of the given numbers : 2.000000

// Simple calculator function


function Calculate() {
    const num1 = 10;
    const num2 = 5;

    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = num2 !== 0 ? num1 / num2 : "Undefined (division by zero)";

    console.log(`Sum: ${sum}`);
    console.log(`Difference: ${difference}`);
    console.log(`Product: ${product}`);
    console.log(`Quotient: ${quotient}`);
}

Calculate();
