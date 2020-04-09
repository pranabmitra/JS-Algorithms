/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    let count = 0;

    function getNumberOfSetBits(n) {
        let setBitsCount = 0;
        while (n) {
            n = n & (n - 1);
            setBitsCount++;
        }
        
        return setBitsCount;
    }
    
    function isPrime(n) {
        if (n <= 1) {
            return false;
        }
        
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        
        return true;
    }
    
    while(L <= R) {
        let setBitsCount = getNumberOfSetBits(L);
        
        if (isPrime(setBitsCount)) {
            count++;
        }
        
        L++;
    }
    
    return count;
};