/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length,
        sameNumCount = 0,
        temp;
    temp = nums[0];
    for (let i = 1; i < len; ) {
        
        if (temp === nums[i]) {
            sameNumCount++;
        } else {
            temp = nums[i];
            sameNumCount = 0
        }
        
        if (sameNumCount >= 2) {
            nums.splice(i, 1);
            len = nums.length;
        } else {
            i++;
        }   
    }
    
    return nums.length;
};