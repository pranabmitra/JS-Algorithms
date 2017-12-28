/* pick a pivot, put all items smaller than the pivot to the left and larger on the right */
function quickSort(arr, left, right) {
    var len = arr.length,
        pivot,
        partionIndex;

    if (left < right) {
        pivot = right;
        partionIndex = partion(arr, pivot, left, right);

        quickSort(arr, left, partionIndex - 1);
        quickSort(arr, partionIndex + 1, right);
    }

    return arr;
}

function partion(arr, pivot, left, right) {
    var pivotValue = arr[pivot],
        partionIndex = left;

    for (var i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partionIndex);
            partionIndex++;
        }
    }

    swap(arr, right, partionIndex);

    return partionIndex;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


/***** Output *****/
var arr = [22, 30, 10, 7, 29, 23];
console.log('Before Quick Sort: ', arr);
console.log('After Quick Sort: ', quickSort(arr, 0, arr.length - 1));
