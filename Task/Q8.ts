// Write a Java method that accepts three integers and checks whether they are consecutive or not. Returns true or false.

//Expected Output:

//Input the first number:  15
//Input the second number:  16
//Input the third number:  17
//Check whether the three said numbers are consecutive or not consecutivefunction areConsecutive(a: number, b: number, c: number): boolean {

function areConsecutive(a: number, b: number, c: number): boolean {
    const min = Math.min(a, b, c);
    const max = Math.max(a, b, c);
    return max - min === 2 && (a + b + c) === (min + max + (min + 1));
}
console.log(12,13,14);

console.log(`Check whether the three said numbers are consecutive or not!`);
