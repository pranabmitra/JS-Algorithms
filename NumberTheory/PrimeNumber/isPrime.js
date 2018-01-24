function isPrime(n) {
    var i;

    if (n <= 1) {
        return false;
    }

    for (i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log('43 is a prime number:', isPrime(43));
console.log('49 is a prime number:', isPrime(49));
