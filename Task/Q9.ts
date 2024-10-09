//Write a program to check Armstrong and Perfect numbers using the function.
//Test Data :
//Input any number: 371
function isArmstrong(num: number): boolean {
    const strNum = num.toString();
    const numDigits = strNum.length;
    let sum = 0;

    for (let digit of strNum) {
        sum += Math.pow(Number(digit), numDigits);
    }

    return sum === num;
}

function isPerfect(num: number): boolean {
    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}

function ma(number: number) {
    // Check for Armstrong number
    if (isArmstrong(number)) {
        console.log(`${number} is an Armstrong number.`);
    } else {
        console.log(`${number} is not an Armstrong number.`);
    }

    // Check for Perfect number
    if (isPerfect(number)) {
        console.log(`${number} is a Perfect number.`);
    } else {
        console.log(`${number} is not a Perfect number.`);
    }
}
ma(111);  
