

# Number Guessing Game (Background Color Changer)

## Overview
This is a simple project where clicking the "Start" button will change the background color of the webpage every 100 milliseconds. Clicking the "Stop" button will stop this effect.

## How It Works
- **Start Button:** Clicking the "Start" button will trigger the background color of the webpage to change randomly every 100 milliseconds.
- **Stop Button:** Clicking the "Stop" button will halt the color-changing effect.

This project uses basic JavaScript functions like `setInterval()`, `clearInterval()`, `setTimeout()`, and `clearTimeout()` to handle timing and stopping of functions.

## How to Run
1. Download or clone the repository.
2. Open `index.html` in any modern web browser.
3. Click "Start" to begin the background color transition every 100 milliseconds.
4. Click "Stop" to stop the transition.

## Technologies Used
- HTML
- CSS
- JavaScript

## Notes on JavaScript Timing Functions

### `setInterval()`
`setInterval()` is a function that repeatedly executes a specified function at set intervals (in milliseconds).

**Syntax:**
```javascript
const intervalID = setInterval(callbackFunction, delay);
```
- `callbackFunction`: The function that is repeatedly executed.
- `delay`: Time delay in milliseconds between each call of the `callbackFunction`.
- `intervalID`: A unique identifier for the interval, used with `clearInterval()` to stop the interval.

**Example:**
```javascript
let intervalID = setInterval(() => {
  console.log("This will run every second");
}, 1000);
```

### `clearInterval()`
`clearInterval()` is used to stop a function from repeatedly executing after it has been set with `setInterval()`.

**Syntax:**
```javascript
clearInterval(intervalID);
```
- `intervalID`: The unique identifier returned by `setInterval()` that you want to clear.

**Example:**
```javascript
clearInterval(intervalID);
```

### `setTimeout()`
`setTimeout()` is a function that executes a specified function once after a certain delay (in milliseconds).

**Syntax:**
```javascript
const timeoutID = setTimeout(callbackFunction, delay);
```
- `callbackFunction`: The function that is executed once after the delay.
- `delay`: Time delay in milliseconds before executing the `callbackFunction`.
- `timeoutID`: A unique identifier for the timeout, used with `clearTimeout()` to cancel it.

**Example:**
```javascript
const timeoutID = setTimeout(() => {
  console.log("This will run after 2 seconds");
}, 2000);
```

### `clearTimeout()`
`clearTimeout()` is used to stop a function set with `setTimeout()` before it is executed.

**Syntax:**
```javascript
clearTimeout(timeoutID);
```
- `timeoutID`: The unique identifier returned by `setTimeout()` that you want to cancel.

**Example:**
```javascript
clearTimeout(timeoutID);
```

