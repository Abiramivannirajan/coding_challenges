//Write a JavaScript program that returns a subset of a string.
//Sample Data: dog
//Expected Output: ["d", "do", "dog", "o", "og", "g"]
function getSubsets(str: string): string[] {
    const subsets: string[] = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {        
            subsets.push(str.substring(i, j));
        }
    }
    return subsets;
}
const inputString = "dog";
console.log(getSubsets(inputString));


//For the input string "dog":

//First Iteration (i = 0):

//j = 0: substring = "d"
//j = 1: substring = "do"
//j = 2: substring = "dog"

//Second Iteration (i = 1):

//j = 1: substring = "o"
//j = 2: substring = "og"

//Third Iteration (i = 2):

//j = 2: substring = "g