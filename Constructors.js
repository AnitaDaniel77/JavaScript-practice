// Define a custom constructor function called Transaction
// Constructor functions start with a capital letter by convention
// It accepts two parameters: accountHolder (name) and amount (transaction value)
function Transaction(accountHolder, amount) {

    // this.accountHolder assigns the passed in name to the object's accountHolder property
    // 'this' refers to the new object being created
    this.accountHolder = accountHolder;

    // this.amount assigns the passed in amount to the object's amount property
    this.amount = amount;

    // this.date automatically captures the current date and time
    // new Date() is a built-in JavaScript constructor that creates a date object
    this.date = new Date();

    // this.describe is a method — a function stored as a property on the object
    // When called, it logs a message showing who transacted and how much
    this.describe = function() {
        console.log(this.accountHolder + " transacted R" + this.amount);
    }
}

// Create a new Transaction object for Anita using the new keyword
// "Anita" is the accountHolder and 500 is the amount
// The constructor runs and builds a new object with Anita's data
let t1 = new Transaction("Anita", 500);

// Create a new Transaction object for Vito
// "Vito" is the accountHolder and 200 is the amount
// This is a completely separate object from t1 with its own data
let t2 = new Transaction("Vito", 200);

// Call the describe method on t1 — logs Anita's transaction
t1.describe(); // Anita transacted R500

// Call the describe method on t2 — logs Vito's transaction
t2.describe(); // Vito transacted R200