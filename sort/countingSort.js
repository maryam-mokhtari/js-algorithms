const countingSort = q => {
  const n = q.length
  const c = []
  const a = []

  for (let i = 0; i < n; i++) {
    if (c[q[i]] === undefined) {
      c[q[i]] = 1
    } else {
      c[q[i]]++
    }
  }

  if (c[0] == undefined) c[0] = 0
  for (let i = 1; i < c.length; i++) {
    if (c[i] === undefined) {
      c[i] = 0
    }
    c[i] += c[i - 1]
  }

  for (let i = n - 1; i >= 0; i--) {
    a[c[q[i]]] = q[i]
    c[q[i]]--
  }
  
  for (let i = 0; i < n; i++) {
    q[i] = a[i + 1]
  }
}

// It is more advisable to use countingSort when the numbers interval is already known. For
// example we know all the numbers are between 0 and 256. In this case it is better to pass 
// the maximum amount of q[i] which is "k" as the second parameter. 
// In this case the order of algorithm is O(n) which is wanting :)
const countingSort = (q, k = 256) => {
  const n = q.length
  const c = Array(k).fill(0)
  const a = []

  for (let i = 0; i < n; i++) {
    c[q[i]]++
  }
  for (let i = 1; i < k; i++) {
    c[i] += c[i - 1]
  }

  for (let i = n - 1; i >= 0; i--) {
    a[c[q[i]] - 1] = q[i]
    c[q[i]]--
  }
  
  for (let i = 0; i < n; i++) {
    q[i] = a[i]
  }
} 