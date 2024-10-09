//Write a Java method to find the smallest number among three numbers.
//Test Data:
//Input the first number: 25
//Input the Second number: 37
//Input the third number: 29
//Expected Output:
//The smallest value is 25.0
// function findSmallest(a: number, b: number,c: number): number {
//     return a < b && a < c ? a : b < c ? b : c;
// }
// console.log(findSmallest(37,25,29));
function findSmallest(a, b, c) {
    return a < b && a < c ? a : b < c ? b : c;
}
var num1 = 25;
var num2 = 37;
var num3 = 29;
var smallest = findSmallest(num1, num2, num3);
console.log("The smallest value is ".concat(smallest));
