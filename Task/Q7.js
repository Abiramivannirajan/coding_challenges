//Write a Java method to compute the average of three numbers.
//Test Data:
//Input the first number: 25
//Input the second number: 45
//Input the third number: 65
//Expected Output:
//The average value is 45.0
function calculateAverage(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
// Test the function
var firstNumber = 25;
var secondNumber = 45;
var thirdNumber = 65;
var average = calculateAverage(firstNumber, secondNumber, thirdNumber);
console.log("The average value is ".concat(average.toFixed(1)));
