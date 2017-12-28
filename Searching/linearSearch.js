function linearSearch(arr, item) {
    var i,
        len = arr.length;

    for (i = 0; i < len; i++) {
        if (arr[i] === item) {
            return i;
        }
    }

    return -1;
}


/***** Output *****/
var arr = [22, 30, 10, 7, 29, 23],
    searchItem = 7,
    result;

console.log('List: ', arr, 'and Search item:', searchItem);
result = linearSearch(arr, searchItem);

if (result !== -1) {
    console.log('Item found at index:', result);
} else {
    console.log('Item not found!');
}
