// Write a program in C to read n number of values in an array and display them in reverse order.
// Test Data :
// Input the number of elements to store in the array :3
// Input 3 number of elements in the array :
// element - 0 : 2
// element - 1 : 5
// element - 2 : 7


function main() {
    const n: number = 3; 
    const arr: number[] = [2, 5, 7]; 

    
    if (arr.length !== n) {
        console.log("The number of elements does not match the specified count.");
        return;
    }

    
    console.log("The values stored in the array are:");
    console.log(arr.join(" "));

    
    console.log("The values stored in the array in reverse are:");
    console.log(arr.reverse().join(" "));
}

main();
