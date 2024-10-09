//. Write a C program to find the maximum and minimum of some values using a function that returns an array.
//Test Data :
//Input 5 values
//25
//11
//35
//65
//20
function findMaxMin(values: number[]): [number, number] {
    let max = values[0];
    let min = values[0];

    for (let i = 1; i < values.length; i++)
        if (values[i] > max) {
            max = values[i];
        }
        if (values[i] < min) {
            min = values[i];
        }
    }

    return [max, min]; // Return an array with max and min
}

function main() {
    
    const values: number[] = [25, 11, 35, 65, 20];
    const [max, min] = findMaxMin(values)
    console.log(`Maximum value: ${max}`);
    console.log(`Minimum value: ${min}`);
}

main();
