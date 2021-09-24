// Array should be already sorted.

const binarySearch = (q, key, low = 0, high = q.length) => {
    if (low > high) {
        return -1
    }
    let mid = parseInt((low + high) / 2)
    if (q[mid] < key) {
        return binarySearch(q, key, mid + 1, high)
    } else if (q[mid] > key) {
        return binarySearch(q, key, low, mid - 1)
    } else {
        return mid
    }
}
