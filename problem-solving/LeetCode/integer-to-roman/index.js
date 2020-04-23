/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let romanStr = '';
    
    while(num !== 0) {
        if (num >= 1000) {
            romanStr += 'M';
            num -= 1000;
        } else if (num >= 900) {
            romanStr += 'CM';
            num -= 900;
        } else if (num >= 500) {
            romanStr += 'D';
            num -= 500;
        } else if (num >= 400) {
            romanStr += 'CD';
            num -= 400;
        } else if (num >= 100) {
            romanStr += 'C';
            num -= 100;
        } else if (num >= 90) {
            romanStr += 'XC';
            num -= 90;
        } else if (num >= 50) {
            romanStr += 'L';
            num -= 50;
        } else if (num >= 40) {
            romanStr += 'XL';
            num -= 40;
        } else if (num >= 10) {
            romanStr += 'X';
            num -= 10;
        } else if (num >= 9) {
            romanStr += 'IX';
            num -= 9;
        } else if (num >= 5) {
            romanStr += 'V';
            num -= 5;
        } else if (num >= 4) {
            romanStr += 'IV';
            num -= 4;
        } else if (num === 3) {
            romanStr += 'III';
            num -= 3;
            break;
        } else if (num === 2) {
            romanStr += 'II';
            num -= 2;
            break;
        } else if (num === 1) {
            romanStr += 'I';
            num -= 1;
            break;
        }
    }
    
    return romanStr;
};