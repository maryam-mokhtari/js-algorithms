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

findKthSmallest = (q, k, low = 0, high = q.length - 1) => {
    let pivot = partition(q, low, high)
    if (pivot > k) {
        return findKthSmallest(q, k, low, pivot - 1)
    } else if (pivot < k) {
        return findKthSmallest(q, k, pivot + 1, high)
    } else {
        return q[pivot]
    }
}
