// Tis function returns the "d"th digit of the number.
// For example for fetching the 4th digit of 12345678 which is 5, we call dth(12345678,4)
// counting from right side
const dth = (a, d) => (a % (10 ** d) - a % (10 ** (d - 1))) / 10 ** (d - 1)

// This is a customized version of "countingSort" in which k = 10
// which is the used for every digit "d" differing from 0 to 9
const countingSort = (q, d) => {
  const n = q.length
  const a = []
  const c = Array(10).fill(0)
  for (let i = 0; i < n; i++) {
    c[dth(q[i], d)]++
  }
  for (let i = 1; i < 10; i++) {
    c[i] += c[i - 1]
  }
  for (let i = n - 1; i >= 0; i--) {
    a[c[dth(q[i], d)] - 1] = q[i]
    c[dth(q[i], d)]--
  }
  for (let i = 0; i < n; i++) {
    q[i] = a[i]
  }
}

// Radix Sort which has the limitation of maximum "d" digits
// As far as d is a constant, the order of algorith is O(n)
const radixSort = (q, d) => {
  for (let i = 1; i <= d; i++) {
    countingSort(q, i)
  }
}