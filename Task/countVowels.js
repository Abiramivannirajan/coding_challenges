// write a function to count both vowels and consonents in a string
//input: Nithya   output: vowels=2  consonent=4
function count(str) {
    var vowels = 0;
    var letter = str.toLowerCase(); //a
    for (var _i = 0, letter_1 = letter; _i < letter_1.length; _i++) { //a, 
        var val = letter_1[_i];
        if (val == 'a' || val == "e" || val == "i" || val == "o" || val == "u")
            vowels++;
    }
    return vowels;
}
console.log(count("Abirami"));
