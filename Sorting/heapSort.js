function getLeftChildIndex(index) {
    return (2 * index) + 1;
}

function getRightChildIndex(index) {
    return (2 * index) + 2;
}

function maxHeapify(arr, heapSize, index) {
    let left,
        right,
        largest,
        temp;

    left = getLeftChildIndex(index);
    right = getRightChildIndex(index);

    if (left < heapSize && arr[left] > arr[index]) {
        largest = left;
    } else {
        largest = index;
    }

    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== index) {
        temp = arr[index];
        arr[index] = arr[largest];
        arr[largest] = temp;

        maxHeapify(arr, heapSize, largest);
    }
}

function buildMaxHeap(arr, heapSize) {
    let i;

    for (i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, heapSize, i);
    }
}

function heapSort(arr) {
    let i,
        temp,
        heapSize = arr.length;

    buildMaxHeap(arr, heapSize);

    for (i = heapSize - 1; i >= 1; i--) {
        temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapSize--;

        maxHeapify(arr, heapSize, 0);
    }
}


/*  Init  */
let arr = [22, 30, 10, 7, 29, 23];

console.log('Source: ', arr);

heapSort(arr);
console.log('After Heap Sort: ', arr);

