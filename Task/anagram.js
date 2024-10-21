function anagram(a, b) {
    var x = a.length;
    var y = b.length;
    if (x != y) {
        return false;
    }
    var s = a.toLowerCase().split("").sort().join("");
    var n = b.toLowerCase().split("").sort().join("");
    console.log(s);
    if (s == n) {
        return true;
    }
    else {
        return false;
    }
}
console.log(anagram("Listen", "Silent"));
console.log(anagram("abirami", "vidhya"));






function isPalindrome(s: string): boolean {


    return s === s.split('').reverse().join('');
}

const inputString = prompt("Enter a string:") || "";
console.log(isPalindrome(inputString) ? "It's a palindrome!" : "It's not a palindrome.");

