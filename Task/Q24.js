/*Write a function that takes a parameter that can be either a number or a string.
 If it’s a number, return the square of the number. If it’s a string, return the length of the string
 output:

 */
function special(value) {
    if (typeof value == "number") {
        return value * value;
    }
    else {
        return value.length;
    }
}
console.log(special(100));
console.log(special("ani"));
