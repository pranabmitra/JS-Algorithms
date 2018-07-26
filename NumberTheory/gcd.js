/*
 * Greatest Common Divisor (GCD) or Highest Common Factor (HCF) of two positive integers is the largest positive integer that divides both numbers without remainder.
 * */


// find GCD of two numbers
function gcd(a, b) {
	if((a % b) == 0) {
		return b;
	}

	return gcd(b, (a % b));
}

// find GCD from a list of numbers
function findGCD(arr) {
    let result = arr[0],
        len = arr.length;

    for (let i = 1; i < len; i++) {
        result = gcd(arr[i], result);
    }

    return result;
}

/****  output  ****/
console.log('GCD of 2 and 4: ', gcd(2,4));
console.log('GCD of [1,2,3]: ', findGCD([1,2,3]));

console.log('GCD of [2, 4, 6, 8]:', findGCD([2, 4, 6, 8]));
