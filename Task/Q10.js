//. Write a C program to find the maximum and minimum of some values using a function that returns an array.
//Test Data :
//Input 5 values
//25
//11
//35
//65
//20
function findMaxMin(values) {
    var max = values[0];
    var min = values[0];
    for (var i = 1; i < values.length; i++) {
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
    var values = [25, 11, 35, 65, 20];
    var _a = findMaxMin(values), max = _a[0], min = _a[1];
    console.log("Maximum value: ".concat(max));
    console.log("Minimum value: ".concat(min));
}
main();
