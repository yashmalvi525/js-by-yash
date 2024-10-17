# Event Handling in JavaScript

## Overview
This section describes the click event handling implemented in the project using JavaScript.

## Code Functionality
- The code adds click event listeners to an image element and its parent list element.
- When the image with the ID `owl` is clicked, a message "you clicked owl" is logged to the console.
- Clicking on any part of the list logs "you clicked lists" to the console.
- The `e.stopPropagation()` method is used to prevent the click event from bubbling up to the parent list element when the owl image is clicked.

## Event Propagation
Event propagation in the DOM occurs in two phases: capturing and bubbling.
- **Capturing Phase**: The event starts from the root of the DOM and travels down to the target element.
- **Bubbling Phase**: The event starts from the target element and travels up to the root.

## Using `useCapture`
- Adding `true` as the third argument in the `addEventListener` method:
  - Causes the event listener to be invoked during the capturing phase.
  - This means that the event listener on the parent element (e.g., the list) will execute before the event listener on the child element (e.g., the owl image).

## Example
```javascript
let owl = document.querySelector('#owl');
owl.addEventListener('click', function(e) {
    console.log("you clicked owl");
    e.stopPropagation(); // Prevents the parent event from firing
});

// Parent event listener
let li = document.getElementById('images');
li.addEventListener('click', function(e) {
    console.log("you clicked lists");
});
