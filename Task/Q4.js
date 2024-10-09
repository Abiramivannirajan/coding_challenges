function isPalindrome(word) {
    return word === word.split('').reverse().join('');
}
function repeatAsterisk(count) {
    var result = ' ';
    for (var i = 0; i < count; i++) {
        result += '*';
    }
    return result;
}
function replacePalindromes(input) {
    var words = input.split(' ');
    var modifiedWords = words.map(function (word) {
        if (isPalindrome(word) && word.length > 1) {
            return repeatAsterisk(word.length);
        }
        return word;
    });
    return modifiedWords.join(' ');
}
var input = "bob has a radar plane";
var modifiedString = replacePalindromes(input);
console.log("Modified String:", modifiedString);
//The words are split into an array: ["bob", "has", "a", "radar", "plane"].//input string bob has a radar plane
//The function checks each word:
//"bob" is a palindrome (replaced with ***).
//"has" is not a palindrome (kept as has).
//"a" is too short (kept as a).
//"radar" is a palindrome (replaced with *****).
//"plane" is not a palindrome (kept as plane).
