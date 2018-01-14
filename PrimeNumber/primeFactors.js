console.log('----- Prime Factors -----');

/* Return all prime factors of a given number */
function primeFactors(n) {
    var i,
        primeFactors = [];

    while(n % 2 === 0) {
        primeFactors.push(2);
        n /= 2;
    }

    // skip even numbers, that's why incrementing: i = i + 2
    for (i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            primeFactors.push(i);
            n /= i;
        }
    }

    // add last factor
    if (n > 2) {
        primeFactors.push(n);
    }

    return primeFactors;
}

console.log('Prime factors of 360:');
console.log(primeFactors(360));
