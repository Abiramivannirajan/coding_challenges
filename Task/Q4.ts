function isPalindrome(word: string): boolean {
    
    return word === word.split('').reverse().join('');
}
function repeatAsterisk(count: number): string {
    let result = ' ';
    for (let i = 0; i < count; i++) {
        result += '*';
    }
    return result;
    
}
function replacePalindromes(input: string): string {
    const words = input.split(' ');
    const modifiedWords = words.map(word => {
        if (isPalindrome(word) && word.length > 1) {
            return repeatAsterisk(word.length); 
            
        
        }
        return word;
        
    });
    return modifiedWords.join(' ');
}

const input = "bob has a radar plane";
const modifiedString = replacePalindromes(input);
console.log("Modified String:", modifiedString);

//The words are split into an array: ["bob", "has", "a", "radar", "plane"].//input string bob has a radar plane
//The function checks each word:
//"bob" is a palindrome (replaced with ***).
//"has" is not a palindrome (kept as has).
//"a" is too short (kept as a).
//"radar" is a palindrome (replaced with *****).
//"plane" is not a palindrome (kept as plane).