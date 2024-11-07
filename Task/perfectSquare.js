//find the perfect Number
function isPerfectNumber(num) {
    var sum = 0;
    for (var i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum = sum + i;
        }
    }
    if (sum === num && num !== 0) {
        return "perfect number";
    }
    else {
        return "not a perfect number";
    }
}
console.log(isPerfectNumber(6)); //1 3 2
