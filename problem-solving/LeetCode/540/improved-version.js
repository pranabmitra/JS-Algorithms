/* Not using any temp Array; Deleting matched items after every binary seach call */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  
    function binarySearch(arr, leftIndex, rightIndex, item) {
        var mid;

        if (leftIndex <= rightIndex) {
            mid = Math.floor(leftIndex + ((rightIndex - leftIndex) / 2));

            if (arr[mid] === item) {
                return mid;
            } else if (arr[mid] > item) {
                return binarySearch(arr, leftIndex, mid - 1, item);
            } else {
                return binarySearch(arr, mid + 1, rightIndex, item);
            }
        } else {
            return -1;
        }
    }
    
    
    while(nums.length >= 1) {
        if (nums.length === 1) { 
            return nums[0];
        }
        
        let index = binarySearch(nums, 1, nums.length - 1, nums[0]);
        if (index === -1) {
            return nums[0];
        } else {
            // Delete matched items form the list
            nums = [...nums.slice(0, 1), ...nums.slice(2, nums.length)];
            nums = [...nums.slice(0, index - 1), ...nums.slice(index, nums.length)];
        }

    }
}