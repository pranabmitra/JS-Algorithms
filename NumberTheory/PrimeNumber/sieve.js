console.log('----- All primes up to a specified number -----');

/* Sieve method :: return a list of prime numbers up to a specified number */
function sieveOfEratosthenes(n) {
    let prime = Array(n).fill(true),
        i,
        j,
        result = [];

    for (i = 2; i <= n; i++) {
        if (prime[i]) {
            result.push(i);

            for (j = i * 2; j <= n; j += i) {
                prime[j] = false;
            }
        }
    }

    return result;
}

const listOfPrimeNumbers = sieveOfEratosthenes(50);
console.log('All prime numbers up to 50');
console.log(listOfPrimeNumbers);

/* isPrime check from the list */
const isPrime1 = listOfPrimeNumbers.indexOf(27), // false
    isPrime2 = listOfPrimeNumbers.indexOf(29); // true

console.log('27 is a prime number:', isPrime1 >= 0, '\n29 is a prime number:', isPrime2 >= 0);
