// Write a program in C to print all perfect numbers in a given range using the function.
//Test Data :
//Input lowest search limit of perfect numbers : 1
//Input lowest search limit of perfect numbers : 100
//Expected Output :

 //he perfect numbers between 1 to 100 are :                                      
 //6   28  
 function Perfect(num: number): boolean {
    let sum = 0;

    // Calculate the sum of proper divisors
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i; // Add divisor to sum
        }
    }

    return sum === num; // Check if the sum of divisors equals the number
}

function printPerfect(lowerLimit: number, upperLimit: number): void {
    console.log(`${lowerLimit} and ${upperLimit} are:`);
    
    const perfect: number[] = []; // Array to store perfect numbers

    for (let i = lowerLimit; i <= upperLimit; i++) {
        if (Perfect(i)) {
            perfect.push(i); // Add perfect number to the array
        }
    }

    // Sort the array of perfect numbers
    perfect.sort((a, b) => a - b);

    // Check if any perfect numbers were found and print them
    if (perfect.length > 0) {
        console.log(perfect.join(' ')); // Print sorted perfect numbers
    } else {
        console.log("None found."); // If no perfect numbers found
    }
}

// Example usage
printPerfect(1, 100);
