//Write a Java program to create an interface Flyable with a method called fly_obj(). Create three classes Spacecraft, Airplane, and Helicopter that implement the Flyable interface. Implement the fly_obj() method for each of the three classes.
// Define the Flyable interface
interface Flyable {
    flyObj(): void;
}

class Spacecraft implements Flyable {
    flyObj() {
        console.log("The spacecraft is soaring through space!");
    }
}

class Airplane implements Flyable {
    flyObj() {
        console.log("The airplane is flying high in the sky!");
    }
}

class Helicopter implements Flyable {
    flyObj() {
        console.log("The helicopter is hovering above the ground!");
    }
}

// Test the implementations
const objects: Flyable[] = [new Spacecraft(), new Airplane(), new Helicopter()];
objects.forEach(obj => obj.flyObj());
