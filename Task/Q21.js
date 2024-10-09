// Input: 5
// Output:
// 1
// 22
// 333
// 4444
// 55555
function printRightAngledTriangle(rows) {
    for (var i = 1; i <= rows; i + 1) {
        var number = '';
        for (var j = 1; j <= i; j++) {
            number += " ".concat(i);
        }
        console.log(number.trim());
    }
}
var numberOfRows = 5;
printRightAngledTriangle(numberOfRows);
