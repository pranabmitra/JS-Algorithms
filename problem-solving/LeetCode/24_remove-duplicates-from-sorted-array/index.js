/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length;
    
    for (let i = 1; i < len; ) {
        if (nums[i - 1] === nums[i]) {
            nums.splice(i, 1);
            len = nums.length;
        } else {
            i++;
        }
    }
    
    return len;
};