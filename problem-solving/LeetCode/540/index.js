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
    
    for (let i = 0; i < nums.length; i++) {
        let arr = [...nums.slice(0, i), ...nums.slice(i + 1, nums.length)];
        let index = binarySearch(arr, 0, arr.length - 1, nums[i]);
        if (index === -1) {
            return nums[i];
        }
    }
}