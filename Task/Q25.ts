// function employee(a: string): number {
//     return a.length

// }
// console.log(employee("abirami"))



// function person(a: number[]): any {
//     return a.reverse()

// }
// console.log(person([1, 3, 4, 5, 6]))




// function persn(a: string[]): any {
//     return a.reverse()
// }
// console.log(persn(["abirami", "thirsha", "vidhya", " Magathi"]))



// var people: [string, number];
// people = ["abirami", 22]


// console.log(people);


// function peoples(name: string, age: number): any {
//     return {
//         name: "abirami",
//         age: 21
//     }

// }
// console.log(peoples("abirami", 22))


// var a: number = 3
// if (a >= 5)
//     console.log(" its is greater")
// else if (a <= 5)

//     console.log("its is lesser")

// var n: number = 9
// // if(n%2==0)
// //     console.log("its is even")
// // else if (n%2!=0)
// //     console.log("its is odd")

// // var n:number=-2
// // if(n>0)
// //     console.log("its is postive");
// // else 
// //  console.log("its is negative");

// // var i:number=0
// // for(i=0;i<=10;i++){
// //     if(i%3!=0)
// //     console.log(i)
// // }

// // var i: number;
// // var count: number = 0;
// // for (i = 10; i <= 20; i++) {
// //     if (i % 3 != 0) {
// //         count++
// //         console.log(i);
// //     }
// // }
// // console.log(count);

// // You are given with a number N. You have to find whether number N is Positive or Negative. Consider zero as a Positive number.

// // Example 1:
// // Input : 
// // 0
// // Output:
// // Positive

// // Example 2:
// // Input:
// // -7
// // // Output:
// // // Negative
// // var n:number=0;
// // if(n<1)
// //    console.log("postive");
// // else
// //    console.log("negative")

// // var n:number=1;
// // if(n>=0)
// // console.log("postive");
// // else
// // console.log("negative");


// // Write a program to find whether the given number N is divisible by 10 or not. If divided by 10, then print "YES", otherwise "NO".

// // Example 1:
// // Input:
// // 12
// // Output:
// // No

// // Example 1:
// // // Input:
// // // 20
// // // Output:

// // var n:number=4;
// // if(n%10==0)
// //     console.log("yes");
// // else
// //     console.log("no");



// //     Write a program to print the numbers in array.

// // Example:
// // Input 1:
// // [10,20,30,40]
// // Output:
// // 10
// // 20
// // 30
// // 40

// // Example 2:
// // Input:
// // [5,4,3,2,1]
// // Output:
// // 5
// // 4
// // 3
// // 2


// var value: number[] = [5, 4, 3, 2, 1]
// for (var i = 0; i < value.length - 1; i++) {
//     console.log(value[i]);
// }
// Write a program to iterate an array and print "Odd" or "Even" with respect to each value.

// Example 1:
// Input:
// [2,3,10,11,13]
// Output:
// Even
// odd
// Even
// Odd
// Odd

// Example 2:
// Input:
// [4,10]
// Output:
// Even
// Even

var store: number[] = [2, 3, 10, 11, 13]
for (var i = 0; i < store.length; i++) {
    if (store[i] % 2 == 0)
        console.log("even");
    else
        console.log("odd");
}
// You are given with two numbers x and y. If x and y are equal, then print "Yes", otherwise "No".

// Example 1:
// Input:
// x = 10
// y = 5
// // Output:
// // No
// var x: number = 10;
// var y: number = 5;
// if (x != y)
//     console.log("yes");
// else
//     console.log("no");

// //  You are given with ar[] and number N. You have to iterate an array and if it is greater then N p array, then print "Yes", otherwise "No".

//  Example 1:
//  Input:
//  ar[] = [2,4,5,6,8,3]
//  N = 5
//  Output:
//  Yes

//  Example 2:
//  Input:
//  ar[] = [2,4,5,6,8,3]
//  N = 1
//  Output:
// //  No
// var n: number = 5
// var sambar: number[] = [2, 4, 5, 6, 8, 3]
// for ( var i = 0; i < sambar.length; i++) {
//     if (n == sambar[i])
//         console.log("yes");



// You are given with ar[] and number N. You have to iterate an array and if it is greater then N print the number 

// Example 1:
// Input:
// ar[] = [2,4,5,6,8,3]
// N = 3
// Output:
// 4
// 5
// 6
// 8

// Example 2:
// Input:
// ar[] = [2,4,5,6,8,3]
// N = 6
// Output:
// 8
// var max:number=0
// var sambar: number[] = [2, 4, 5, 6, 8, 3]
// for ( var i = 0; i < sambar.length; i++) {
//    if(sambar[i]>max)
//         max = sambar[i]
// }
// console.log(max);


// const number=[1,2,3,4,5]; //using built-in functions
// const max1=Math.max(...number);
// console.log(max1);

// var number=[2,3,5,6,7];
// var maxium=Math.max(...number);
// console.log(maxium);


var min: number = 100
var value: number[] = [2, 3, 4, 6, 7, 8]
for (var i = 0; i <value.length; i++) {
       if(value[i]<min)
        min=value[i]
    }
    console.log(min);


 










