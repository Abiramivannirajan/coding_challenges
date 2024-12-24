var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//  Input: prices = [8,4,6,2,3]
// // Output: [4,2,4,2,3]
function finalPrices(prices) {
    var n = prices.length;
    var result = __spreadArray([], prices, true);
    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            if (prices[j] <= prices[i]) {
                result[i] = prices[i] - prices[j];
                break;
            }
        }
    }
    return result;
}
var prices1 = [8, 4, 6, 2, 3];
console.log(finalPrices(prices1)); // Output: [4, 2, 4, 2, 3]
var prices2 = [1, 2, 3, 4, 5];
console.log(finalPrices(prices2)); // Output: [1, 2, 3, 4, 5]
var prices3 = [10, 1, 1, 6];
console.log(finalPrices(prices3)); // Output: [9, 0, 1, 6]
