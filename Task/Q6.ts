//Write a Java method to find the smallest number among three numbers.
//Test Data:
//Input the first number: 25
//Input the Second number: 37
//Input the third number: 29
//Expected Output:

// The smallest value is 25.0
function findSmallest1(a: number, b: number,c: number): number {
    return a < b && a < c ? a : b < c ? b : c;
}
console.log(findSmallest(37,25,29));


function findSmallest(a: number, b: number, c: number): number {
    return a < b && a < c ? a : b < c ? b : c;
}

const num1 = 25;
const num2 = 37;
const num3 = 29;

const smallest = findSmallest(num1, num2, num3);
console.log(`The smallest value is ${smallest}`);

