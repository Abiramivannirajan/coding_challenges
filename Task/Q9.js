//Write a program to check Armstrong and Perfect numbers using the function.
//Test Data :
//Input any number: 371
function isArmstrong(num) {
    var strNum = num.toString();
    var numDigits = strNum.length;
    var sum = 0;
    for (var _i = 0, strNum_1 = strNum; _i < strNum_1.length; _i++) {
        var digit = strNum_1[_i];
        sum += Math.pow(Number(digit), numDigits);
    }
    return sum === num;
}
function isPerfect(num) {
    var sum = 0;
    for (var i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}
function ma(number) {
    // Check for Armstrong number
    if (isArmstrong1(number)) {
        console.log("".concat(number, " is an Armstrong number."));
    }
    else {
        console.log("".concat(number, " is not an Armstrong number."));
    }
    // Check for Perfect number
    if (isPerfect1(number)) {
        console.log("".concat(number, " is a Perfect number."));
    }
    else {
        console.log("".concat(number, " is not a Perfect number."));
    }
}
ma(11);
