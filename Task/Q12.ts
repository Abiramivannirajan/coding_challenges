//Write a program that reads an array of ints and outputs the length of the
//longest sequence in strictly ascending order. Print the elements of longest
//ascending sequence in an array Elements of the sequence must go one after
//another. A single number is assumed to be an ordered sequence with the length= 1.
function longest(arr: number[]): number[] {

    let longest: number[] = [];
    let current: number[] = [arr[0]];

    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            current.push(arr[i]);
        }

        else {
            if (current.length > longest.length) {
                longest = [...current];
            }
            current = [arr[i]];
        }
    }

    return longest;
}
const arr: number[] = [45, 40, 0, 39, 10];
const longestSequence = longest(arr);

console.log(`Longest: ${longestSequence.length}`);
console.log(longestSequence.join(' '));
