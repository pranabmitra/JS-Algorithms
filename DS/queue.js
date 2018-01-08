var queue = [];

queue.push(4);               // queue is now [4]
queue.push(7);              // queue is now [4, 7]

var value = queue.shift(); // queue is now [7]
console.log(value);       // print 4



/*****  Another way  *****/

var queue = [];

queue.unshift(4);          // queue is now [4]
queue.unshift(7);         // queue is now [7, 4]

var value = queue.pop(); // queue is now [7]
console.log(value);     // print 4
