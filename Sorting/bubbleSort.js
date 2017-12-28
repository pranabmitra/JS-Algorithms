function bubbleSort(arr) {
    var i,
        j,
        len = arr.length,
        temp;

    for (i = 0; i < len; i++) {
        for (j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}


/***** Output *****/
var arr = [22, 30, 10, 7, 29, 23];
console.log('Before Bubble Sort: ', arr);
console.log('After Bubble Sort: ', bubbleSort(arr));
