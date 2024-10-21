var a = [299, 12, 3, 50, 66];
var b = a.sort(function (x, y) { return x - y; });
var max = a[b.length - 1];
console.log(max);
var a1 = [299, 12, 3, 50, 66];
var b1 = a1.sort(function (x, y) { return x - y; });
var min = b1[0]; // Get the first element of the sorted array
console.log(min);
