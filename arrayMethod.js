// Create an array with elements 1, 2, 3, and 4
let arr = new Array(1, 2, 3, 4);

// Map function: Square each element in the array
let mapAns = arr.map((number) => {
    return number * number; // Return the square of the number
});

// Log the result of the map function
console.log(mapAns); // Output: [1, 4, 9, 16]

// Filter function: Select only even numbers from the array
let filterAns = arr.filter((number) => {
    return number % 2 == 0; // Return true for even numbers
});

// Log the result of the filter function
console.log(filterAns); // Output: [2, 4]

// Create another array with elements 1 to 5
let numbers = [1, 2, 3, 4, 5];

// Reduce function: Sum up all numbers in the array
let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // Add current value to the accumulator
}, 0); // Initial value is 0

// Log the result of the reduce function
console.log(sum); // Output: 15