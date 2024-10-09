//Write a Java method to compute the average of three numbers.
//Test Data:
//Input the first number: 25
//Input the second number: 45
//Input the third number: 65
//Expected Output:

//The average value is 45.0

function calculateAverage(num1: number, num2: number, num3: number): number {
    return (num1 + num2 + num3) / 3;
}

// Test the function
const firstNumber: number = 25;
const secondNumber: number = 45;
const thirdNumber: number = 65;

const average: number = calculateAverage(firstNumber, secondNumber, thirdNumber);
console.log(`The average value is ${average.toFixed(1)}`);
