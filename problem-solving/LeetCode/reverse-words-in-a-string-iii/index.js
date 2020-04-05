/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let wordList = s.split(' ');
    
    for (let i = 0; i < wordList.length; i++) {
        wordList[i] = wordList[i].split('').reverse().join('');
    }
    
    return wordList.join(' ');
};