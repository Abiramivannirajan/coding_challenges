//Write a program in to check if a given number is even or odd using the function.
//Test Data :
//Input any number : 5
//Expected Output :
//The entered number is odd. 
function isEven(num) {
    return num % 2 === 0;
}
var number = 5; // You can change this value
if (isEven(number)) {
    console.log("The entered number is even.");
}
else {
    console.log("The entered number is odd.");
}
