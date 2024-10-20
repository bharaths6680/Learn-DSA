## Stacks in JS ##

**Introduction**

1. It is an ordered group of homogeneous items of elements

2. Elements are added to and removed from the one end only that is top of the stack (the most recently added items are at the top of the stack).

3. The last element to be added is the first to be removed (LIFO: Last In, First Out).

ex: **the stack of coins**

![image](https://github.com/user-attachments/assets/32f33e8c-d98a-4d83-87d3-19a3cdf11e52)

![image](https://github.com/user-attachments/assets/add12bd4-93bb-4e7a-9ae4-780f1114f390)

Array-Based Stack Implementation in JavaScript
Here's how you can implement a simple stack using an array:

```javascript
Copy code
class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element
  pop() {
    if (this.isEmpty()) {
      return "Underflow"; // Indicates that the stack is empty
    }
    return this.items.pop();
  }

  // Peek at the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return "No elements in stack";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());  // Output: 30 (top element)
console.log(stack.pop());   // Output: 30 (removes top element)
console.log(stack.size());  // Output: 2 (size after popping)
console.log(stack.isEmpty()); // Output: false (there are still elements)
```

```js
function isValidParentheses(expression) {
  const stack = [];
  const openBrackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let char of expression) {
    if (openBrackets[char]) {
      stack.push(char); // If it's an opening bracket, push it onto the stack
    } else {
      const lastOpen = stack.pop(); // Pop the last open bracket
      if (openBrackets[lastOpen] !== char) {
        return false; // If it doesn't match, return false
      }
    }
  }

  return stack.length === 0; // Stack should be empty at the end if valid
}

console.log(isValidParentheses("{[()]}")); // Output: true (valid)
console.log(isValidParentheses("{[(])}")); // Output: false (invalid)

```

```js
class BrowserHistory {
  constructor() {
    this.backStack = []; // Pages we can go back to
    this.forwardStack = []; // Pages we can go forward to
    this.currentPage = null;
  }

  visit(page) {
    if (this.currentPage) {
      this.backStack.push(this.currentPage); // Add the current page to the backStack
    }
    this.currentPage = page;
    this.forwardStack = []; // Clear forward history on new page visit
    console.log(`Visited: ${page}`);
  }

  back() {
    if (this.backStack.length > 0) {
      this.forwardStack.push(this.currentPage);
      this.currentPage = this.backStack.pop();
      console.log(`Back to: ${this.currentPage}`);
    } else {
      console.log("No pages in back history");
    }
  }

  forward() {
    if (this.forwardStack.length > 0) {
      this.backStack.push(this.currentPage);
      this.currentPage = this.forwardStack.pop();
      console.log(`Forward to: ${this.currentPage}`);
    } else {
      console.log("No pages in forward history");
    }
  }
}

// Example usage:
const history = new BrowserHistory();
history.visit("google.com");
history.visit("youtube.com");
history.visit("stackoverflow.com");
history.back();  // Output: "Back to: youtube.com"
history.back();  // Output: "Back to: google.com"
history.forward(); // Output: "Forward to: youtube.com"

