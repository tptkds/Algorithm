function binarySearch(arr, n, start, end) {
    if (start > end) return -1;
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > n) {
        return binarySearch(arr, n, start, mid - 1)
    } else if (arr[mid] < n) {
       return binarySearch(arr, n, mid + 1, end)
    } else {
        return mid;
    }
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7], 6, 0, 7));