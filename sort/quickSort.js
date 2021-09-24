const swap = (q, i, j) => {
    let temp = q[i]
    q[i] = q[j]
    q[j] = temp
}

const partition = (q, low, high) => {
    let pivot = high
    while (low < high) {
        while (q[low] <= q[pivot] && low < high) {
            low++
        }
        while (q[high] >= q[pivot] && low < high) {
            high--
        }
        swap(q, low, high)
    }
    swap(q, low, pivot)
    return low
}

const quickSort = (q, low = 0, high = q.length - 1) => {
    if (low >= high) return 
    let pivot = partition(q, low, high)
    quickSort(q, low, pivot - 1)
    quickSort(q, pivot + 1, high)
}
