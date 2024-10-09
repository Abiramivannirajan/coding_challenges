//Write a program in C to find the majority element of an array.
//Expected Output :
//The given array is : 1 3 3 7 4 3 2 3 3
//The majority of the Element : 3

function find(arr: number[]): number {
    let frequency: { [key: number]: number } = {};
    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {
            frequency[arr[i]]++;
        } else {
            frequency[arr[i]] = 1;
        }
    }
    
    let maxCount = 0;
    let mostFrequent = arr[0];  
    
    for (let key in frequency) {
        if (frequency[key] > maxCount) {
            maxCount = frequency[key];
            mostFrequent = Number(key);
        }
    }
    
    return mostFrequent;
}

let x = find([1, 3, 3, 7, 4, 3, 2, 3, 3]); 
console.log(x);


