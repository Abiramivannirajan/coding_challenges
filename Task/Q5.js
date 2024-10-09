//Input a string of alphabets. Find out the number of occurrence of all alphabets in that string. Find out the alphabet with maximum occurrence.
function countAlphabets(input) {
    var counts = {};
    for (var _i = 0, _a = input.toLowerCase(); _i < _a.length; _i++) {
        var char = _a[_i];
        if (char >= 'a' && char <= 'z') {
            counts[char] = (counts[char] || 0) + 1;
        }
    }
    var maxChar = 'a';
    var maxCount = 0;
    for (var char in counts) {
        if (counts[char] > maxCount) {
            maxCount = counts[char];
            maxChar = char;
        }
    }
    return { counts: counts, max: { char: maxChar, count: maxCount } };
}
var inputString = "abirrammi";
var result = countAlphabets(inputString);
console.log("Alphabet occur:", result.counts);
console.log("Maximum occur:", result.max);
