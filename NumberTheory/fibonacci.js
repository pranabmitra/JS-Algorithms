/* fibonacci */

console.log('------------ Using Recursion -----------');

function fib(n) {
    var val;

    if (n <= 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

/* output */
var allFibs = [];
for (var i = 0; i < 9; i++) {
    allFibs.push(fib(i));
}

console.log(allFibs);
console.log('Using Recursion:', fib(9));


// using memorization
console.log('------------ Using Memoization -----------');

function fibUsingMemoization(n) {
    var i;

    for (i = 0; i < n; i++) {
        if (i < 2) {
            allFibs.push(i);
        } else {
            allFibs[i] = allFibs[i - 1] + allFibs[i - 2];
        }
    }

    return allFibs;
}

/* output */
const allFibs = [];
console.log(fibUsingMemoization(9));



// Iterative solution

/* ------- Iterative solution  ------ */
console.log('------------ Iterative solution -----------');

function fibByLoop(n) {
    var i,
        a = 0,
        b = 1,
        c,
        allFibs = [a, b];
    
    for (i = 2; i < n; i++) {
       c = a + b;
       a = b;
       b = c;         

       allFibs.push(c);
    }
      
    console.log(allFibs);
    return c;
}

/* output */
console.log('Using Loop:', fibByLoop(9));
