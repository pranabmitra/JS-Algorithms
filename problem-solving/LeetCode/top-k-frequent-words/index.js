/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let obj = {},
        result = [];
    
    for (let i = 0; i< words.length; i++) {
        obj[words[i]] = 1 + (obj[words[i]] || 0);  
    }
    
    Object.keys(obj).forEach((key) => {
        result.push({
            word: key,
            count: obj[key]
        });
    });
    
    result.sort((a, b) => {
        if (a.count > b.count) {
            return -1;
        } else if (a.count < b.count) {
            return 1;
        } else {
            if (a.word > b.word) {
                return 1;
            } else if (a.word < b.word) {
                return -1;
            } else {
                return 0;
            }
        }
    });
    
    return result.map((x) => x.word).splice(0, k);
};