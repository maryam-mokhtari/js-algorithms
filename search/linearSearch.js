// Array should be already sorted.

const linearSearch = (q, key) => {
  let n = q.length;
  for (let i = 0; i < n; i++) {
    if (q[i] === key) {
      return i;
    }
  }
  return -1;
};

// If the last occurrence of the key is needed when repeated elements occurs:
const linearSearch_u = (q, key) => {
  let n = q.length;
  for (let i = 0; i < n; i++) {
    if (q[i] === key && (q[i] !== q[i + 1] || i == n - 1)) {
      return i;
    }
  }
  return -1;
};
