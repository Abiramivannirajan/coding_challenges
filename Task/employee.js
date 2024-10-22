function Locations(gender, age) {
    if (gender === 'F') {
        console.log(" Urban Areas Only");
    }
    else if (gender === 'M') {
        if (age >= 20 && age <= 40) {
            console.log("Anywhere");
        }
        else if (age > 40 && age <= 60) {
            console.log("Urban Areas Only");
        }
        else {
            console.log("Age input is invalid for male employees");
        }
    }
    else {
        console.log("Error");
    }
}
Locations("M", 22);
