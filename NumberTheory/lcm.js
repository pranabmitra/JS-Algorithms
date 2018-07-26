/*
* The Least Common Multiple (LCM) of a group of numbers is the smallest number that is a multiple of all the numbers.
* */

function gcd(a, b) {
    if(a % b == 0) {
        return b;
    }

    return gcd(b, a % b);
}

// find LCM of two numbers
function lcm(a, b) {
    return ((a * b) / gcd(a, b));
}

// find LCM from a list of numbers
function findLCM(arr) {
    let result = arr[0],
        len = arr.length;

    for (let i = 1; i < len; i++) {
        result = ((arr[i] * result) / gcd(arr[i], result));
    }

    return result;
}

// Using Array.prototype.reduce() method
function findLCMUsingReduce(arr) {
    return arr.reduce(lcm);
}

/****  output  ****/
console.log('LCM of 15 and 20: ', lcm(15, 20));
console.log('LCM of 5 and 7: ', lcm(5, 7));

console.log('LCM of [2, 4, 6, 8]: ', findLCM([2,4,6,8]));
console.log('LCM of [2, 4, 3, 9, 7]:', findLCM([2,4,3,9,7]));

console.log('LCM of [2, 4, 6, 8] using reduce(): ', findLCMUsingReduce([2,4,6,8]));
console.log('LCM of [2, 4, 3, 9, 7] using reduce(): ', findLCMUsingReduce([2,4,3,9,7]));
