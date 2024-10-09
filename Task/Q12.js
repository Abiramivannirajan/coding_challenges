
//Write a program that reads an array of ints and outputs the length of the
//longest sequence in strictly ascending order. Print the elements of longest
//ascending sequence in an array Elements of the sequence must go one after
//another. A single number is assumed to be an ordered sequence with the length= 1.
function longest(arr) {
    var longest = [];
    var current = [arr[0]];
    for (var i = 1; i <= arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            current.push(arr[i]);
        }
        else {
            if (current.length > longest.length) {
                longest = __spreadArray([], current, true);
            }
            current = [arr[i]];
        }
    }
    return longest;
}
var arr = [45, 40, 0, 39, 10];
var longestSequence = longest(arr);
console.log("Longest: ".concat(longestSequence.length));
console.log(longestSequence.join(' '));
