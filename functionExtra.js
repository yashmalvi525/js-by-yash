// Functions as First-Class Citizens

// Function that takes a greeting function and a name
function greetMe(greet, name) {
    console.log(`Hello ${name}`);
    greet();
}

// Simple greeting function
function greet() {
    console.log("HELLO");
}

// Call greetMe with the greet function and a name
greetMe(greet, "Alice");

// Returning Functions
function solve(number) {
    return function(number) {
        return number * number;
    }
}

let ans = solve(5);
let finalAns = ans(5);

console.log(finalAns);

// Storing Functions in an Array
const arr = [
    function (a, b) {
        return a + b;
    },
    function (a, b) {
        return a * b;
    },
    function (a, b) {
        return a / b;
    }
];

// Accessing the second function (multiplication)
const ans2 = arr[1];
const mainAns = ans2(2, 3);

console.log(mainAns); // Output: 6