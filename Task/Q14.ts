//Write a program to convert specified days into years, weeks and days.
//Note: Ignore leap year.

//Test Data :
//Number of days : 1329
//Expected Output :
//Years: 3
//Weeks: 33
//Days: 3
function specified_Days(days: number): { years: number; weeks: number; remainingDays: number } {
    const years = Math.floor(days / 365);
    days %= 365; 
    const weeks = Math.floor(days / 7); 
    const remainingDays = days % 7; 
    return { years, weeks, remainingDays }; 
}

const result = specified_Days(1329);
console.log(`Years: ${result.years}`);
console.log(`Weeks: ${result.weeks}`);
console.log(`Days: ${result.remainingDays}`);
