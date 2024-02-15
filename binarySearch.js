function binarySearch(arr, n) {
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start <= end) {
        mid = parseInt((start + end) / 2);
        if (arr[mid] > n) {
            end = mid - 1;
        } else if (arr[mid] < n) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

