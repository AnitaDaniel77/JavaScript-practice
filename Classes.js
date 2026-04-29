// Step 1 — empty class definition
// class keyword, name starts with capital letter
class Train {}

// Step 2 — add a constructor
// constructor runs automatically when new Train() is called
class Train {
    constructor(color, lightsOn) {
        // this refers to the new object being created
        this.color = color;
        this.lightsOn = lightsOn;
    }
}

// new keyword creates an instance of the Train class
var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}

// Each object is separate even with identical values
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }

    // toggleLights flips the lightsOn value
    // ! is the logical NOT operator — true becomes false, false becomes true
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }

    // lightsStatus logs the current value of lightsOn
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }

    // getSelf logs the entire object instance
    getSelf() {
        console.log(this);
    }

    // getPrototype logs all shared methods on the prototype
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

// Test all four methods
var train4 = new Train('red', false);
train4.toggleLights(); // flips lightsOn to true
train4.lightsStatus(); // Lights on? true
train4.getSelf();      // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // shows all methods on the prototype

// HighSpeedTrain inherits everything from Train
// extends sets up the parent-child relationship
class HighSpeedTrain extends Train {

    constructor(passengers, highSpeedOn, color, lightsOn) {
        // super() calls the parent class constructor
        // This initialises color and lightsOn from Train
        super(color, lightsOn);

        // These are HighSpeedTrain's own additional properties
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }

    // New method only available on HighSpeedTrain
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }

    // Override toggleLights from Train — polymorphism in action
    // Same method name, different behaviour in the subclass
    toggleLights() {
        super.toggleLights();   // calls Train's toggleLights() first
        super.lightsStatus();   // calls Train's lightsStatus() next
        console.log('Lights are 100% operational.'); // adds custom message
    }
}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

// train5 uses Train's original toggleLights
train5.toggleLights(); // flips to true
train5.lightsStatus(); // Lights on? true

// highSpeed1 uses HighSpeedTrain's overridden toggleLights
highSpeed1.toggleLights();
// Lights on? true
// Lights are 100% operational.

// Checking prototypes
train5.getPrototype();    // shows Train's methods
highSpeed1.getPrototype(); // shows HighSpeedTrain's methods

// StationaryBike is its own class with position and gears
class StationaryBike {
    constructor(position, gears) {
        this.position = position;
        this.gears = gears;
    }
}

// Treadmill is its own class with position and modes
class Treadmill {
    constructor(position, modes) {
        this.position = position;
        this.modes = modes;
    }
}

// Gym uses StationaryBike and Treadmill as properties
// This shows that a class instance can be stored inside another class
class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs;

        // Creates a StationaryBike object and stores it as a property
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8);

        // Creates a Treadmill object and stores it as a property
        this.treadmill = new Treadmill(treadmillPos, 5);
    }
}

// Build the gym
var boxingGym = new Gym("7-22", "right corner", "left corner");

console.log(boxingGym.openHrs);        // 7-22
console.log(boxingGym.stationaryBike); // StationaryBike {position: 'right corner', gears: 8}
console.log(boxingGym.treadmill);      // Treadmill {position: 'left corner', modes: 5}

