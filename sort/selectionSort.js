const selectionSort = (q) => {
  const n = q.length;
  for (let i = 0; i < n - 1; i++) {
    minj = i;
    for (let j = i + 1; j < n; j++) {
      if (q[j] < q[minj]) {
        minj = j;
      }
    }
    if (minj != i) {
      swap(q, i, minj);
    }
  }
};
