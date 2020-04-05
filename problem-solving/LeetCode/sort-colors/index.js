/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0,
        len = nums.length,
        end = len - 1,
        index = 0;
    
    while (start < end && index <= end) {
        if (nums[index] === 0) {
            nums[index] = nums[start];
            nums[start] = 0;
            index++;
            start++;
        } else if (nums[index] === 2) {
            nums[index] = nums[end];
            nums[end] = 2;
            end--;
        } else {
            index++;
        }
    }
};