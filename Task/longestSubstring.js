// Write a function longestSubstringWithoutRepeatingCharacters that takes a string as input and returns the longest substring without repeating characters.
// Rajaaswin Thangaraj, 2 min, Edited
// Example 1:
// Input: abcabcbb
// Output: abc
// Example 2:
// Input: dvdf
// Output: vdf
function longestSubstring(s) {
    var start = 0; //1
    var maxLen = 0;
    var substring = "";
    for (var i = 0; i < s.length; i++) {
        for (var j = start; j < i; j++) {
            if (s[i] === s[j]) {
                start = j + 1;
                break;
            }
        }
        if (i - start + 1 > maxLen) {
            maxLen = i - start + 1;
            substring = s.substring(start, i + 1);
        }
    }
    return substring;
}
console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("dvdf"));
