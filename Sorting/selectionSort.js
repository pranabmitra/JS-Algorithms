function selectionSort(arr) {
    var len = arr.length,
        i,
        j,
        minIndex,
        temp;

    for (i = 0; i < len; i++) {
        minIndex = i;
        /* find the index of the lowest element and swap the lowest element with the (i)th element */
        for (j = i + 1; j < len; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        swap(arr, i, minIndex);
    }

    return arr;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


/***** Output *****/
var arr = [22, 30, 10, 7, 29, 23];
console.log('Before Selection Sort: ', arr);
console.log('After Selection Sort: ', selectionSort(arr));
