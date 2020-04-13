/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let obj = {},
        len = nums.length;
    
    for(let i = 0; i < len; i++) {
        obj[nums[i]] = 1 + (obj[nums[i]] || 0);
    }
    
    let i = 0;
    // Two elements will be there
    while(len > 2) {
        if (obj[nums[i]] > 1) {
            nums.splice(i, 1);
            len = nums.length;
        } else {
            i++;
        }
    }
    
    return nums;
};