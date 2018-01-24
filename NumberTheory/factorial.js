// Using Recursion

function factorialRecursion(n){
    if(n === 0){ 
        return 1;
    }
    
    return (n * factorialRecursion(n-1));
}

console.log('Factorial of 5 is:', factorialRecursion(5))


// Iterative solution

function factorialUsingLoop(n) {
    var res = 1,
        i;
    
    for (i = 2; i <= n; i++) {
        res *= i;   
    }
    
    return res;
}

console.log('Factorial of 6 is:', factorialUsingLoop(6));


// One liner

function factorialOneLiner(n) {
    return (n==1 || n==0) ? 1: n * factorialOneLiner(n - 1); 
}

console.log('Factorial of 7 is:', factorialOneLiner(7));
