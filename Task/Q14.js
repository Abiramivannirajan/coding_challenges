//Write a program to convert specified days into years, weeks and days.
//Note: Ignore leap year.
//Test Data :
//Number of days : 1329
//Expected Output :
//Years: 3
//Weeks: 33
//Days: 3
function specified_Days(days) {
    var years = Math.floor(days / 365); // Calculate complete years
    days %= 365; // Remaining days after extracting years
    var weeks = Math.floor(days / 7); // Calculate complete weeks
    var remainingDays = days % 7; // Remaining days after extracting weeks
    return { years: years, weeks: weeks, remainingDays: remainingDays }; // Return an object with the results
}
// Test Data
var result = specified_Days(1329);
console.log("Years: ".concat(result.years));
console.log("Weeks: ".concat(result.weeks));
console.log("Days: ".concat(result.remainingDays));
