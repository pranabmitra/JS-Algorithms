function bubbleSort(arr) {
    var i,
        j,
        len = arr.length,
        temp,
        count = 0,
        limit = len;

    for (i = 0; i < len; i++) {
        var tempLimit = 0;

        for (j = 0; j < limit; j++) {
            count++;

            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;

                tempLimit = j;
            }
        }

        limit = tempLimit;
    }

    console.log('count:', count);
    return arr;
}

/***** Output *****/
var arr = [22, 30, 10, 7, 29, 23];
console.log('Before Improved Bubble Sort: ', arr);
console.log('After Improved Bubble Sort: ', bubbleSort(arr));
