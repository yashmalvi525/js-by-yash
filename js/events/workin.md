# Image Removal Functionality

## Overview
This project implements a simple image gallery where users can click on images to remove them from the displayed list. It demonstrates the use of event delegation for efficient event handling in JavaScript.

## Features
- **Dynamic Image Removal**: Users can click on any image to remove it from the list.
- **Event Delegation**: Utilizes a single event listener on the parent element to manage clicks on child elements (images).

## Code Explanation

### Event Listener
The main functionality is achieved through an event listener attached to the unordered list with the ID `images`. The listener performs the following actions:

1. **Detect Clicks**: Listens for click events on the parent element.
2. **Identify Target**: Checks if the clicked element is an image.
3. **Remove Image**: If it is an image, the corresponding list item is removed from the DOM.

### Implementation
Below is the implementation of the image removal functionality:

```javascript
document.querySelector('#images').addEventListener("click", function(e) {
    // Check if the clicked element is an image
    if (e.target.tagName === 'IMG') {
        // Get the parent node (li) of the clicked image
        let removIt = e.target.parentNode;
        // Remove the list item from the DOM
        removIt.remove();
    }
});
