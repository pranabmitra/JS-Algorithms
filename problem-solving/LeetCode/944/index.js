/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    let deletionCount = 0,
        singleItemLen = A[0].length,
        tempChar;
    
    for (let i = 0; i < singleItemLen; i++){
        tempChar = A[0][i];
        for (let j = 1; j < A.length; j++) {
            if (tempChar > A[j][i]) {
                deletionCount++;
                break;
            }
            
            tempChar = A[j][i];
        }
    }
    
    return deletionCount;
};