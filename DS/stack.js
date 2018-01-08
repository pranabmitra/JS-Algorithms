var stack = [];

// put value on top of stack
stack.push(4);              // stack is now [4]
stack.push(7);             // stack is now [4, 7]

// remove value from top of stack
var value = stack.pop(); // stack is now [4]
console.log(value);     // print 7



/*****  Another way  *****/

var stack = [];

stack.unshift(4);              // stack is now [4]
stack.unshift(7);             // stack is now [7, 4]

var value = stack.shift();  // stack is now [4]
console.log(value);      // print 7
