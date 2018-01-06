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

/***** Output *****/
var arr = [2, 4, 5, 7, 8, 10],
    searchItem = 5,
    result;

console.log('List: ', arr, 'Search item:', searchItem);
result = binarySearch(arr, 0, arr.length - 1, searchItem);

if (result !== -1) {
    console.log('Item found at index:', result);
} else {
    console.log('Item not found!');
}
