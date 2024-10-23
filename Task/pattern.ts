// Write a program in C to display a pattern like a right angle triangle using an asterisk.

// The pattern like :

// *
// **
// ***
// ****
function Triangle(rows: number): void {
    for (let i = 1; i <= rows; i++) {
        let rowPattern = '';
        for (let j = 1; j <= i; j++) {
            rowPattern += '*';
        }
        console.log(rowPattern);
    }
}

const rows = 3; 
Triangle(rows);
