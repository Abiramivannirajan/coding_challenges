//Write a program in C to convert a decimal number to a binary number using the function.
//Test Data :
//Input any decimal number : 65
//Expected Output :

 //The Binary value is : 1000001 


 function decimalToBinary(n: number): string {
       // Edge case for 0
    if (n === 0) {
        return "0";
    }

    let binary: string = "";
    
    // Convert decimal to binary
    while (n > 0) {
        binary = (n % 2).toString() + binary; 
        n = Math.floor(n/ 2); 
    }
    
    return binary;
}

