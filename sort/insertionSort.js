const insertionSort = q => {
    let n = q.length
    for (let i = 1; i < n; i++) {
        let key = q[i]
        let j
        for (j = i - 1; j >= 0; j--) {
            if (q[j] < key) {
                break
            } else {
                q[j + 1] = q[j]
            }
        }
        q[j + 1] = key
    }
}