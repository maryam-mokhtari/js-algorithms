// Array should be already sorted.

const linearSearch = (q, key) => {
  let n = q.length
  for (let i = 0; i < n; i++) {
    if (q[i] === key) {
      return i
    }
  }
  return -1
}
