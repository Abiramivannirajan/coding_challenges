//Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type
var compare;
compare = function (a1, b2) {
    if (a1 === b2) {
        return true;
    }
    else {
        return false;
    }
};
console.log(compare('20', 20));
console.log(compare(210, 210));
