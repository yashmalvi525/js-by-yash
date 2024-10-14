function checkAge(age) {
    try {
        if (typeof age !== 'number') {
            throw new Error("Age must be a number.");
        }
        if (age < 0) {
            throw new Error("Age cannot be negative.");
        }
        
        console.log(`Age: ${age}`);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("We are in the final block.");
    }
}

// Example Usage
checkAge(25); // Valid age
checkAge(-5); // Invalid age: negative
checkAge("twenty"); // Invalid age: not a numbernode 