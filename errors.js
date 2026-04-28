
function addTwoNums(a, b) {
    try {
        if (typeof a !== 'number') {
            throw new TypeError("The first argument is not a number");
        } else if (typeof b !== 'number') {
            throw new TypeError("The second argument is not a number");
        } else {
            console.log(a + b);
        }
    } catch(err) {
        console.log("Error!", err);
    }
}
addTwoNums(5, "5");
console.log("It still works")
// Function that adds two numbers with error handling
function addTwoNums(a, b) {
    try {
        // Task 4: Check if the first argument is a number
        if (typeof a !== 'number') {
            // Throw a TypeError if the first argument is not a number
            throw new TypeError("The first argument is not a number.");
        
        // Check if the second argument is a number
        } else if (typeof b !== 'number') {
            // Throw a TypeError if the second argument is not a number
            throw new TypeError("The second argument is not a number.");
        
        } else {
            // Both arguments are numbers so log the sum
            console.log(a + b);
        }
    
    // Task 3 & 5: Catch any errors thrown in the try block and log them
    } catch(err) {
        console.log("Error!", err);
    }
}

// Task 6: Invoke the function with a number and a string
// "5" is a string so the TypeError for the second argument will be thrown
addTwoNums(5, "5");

// Task 7: This proves the program continues running after the error is caught
console.log("It still works");