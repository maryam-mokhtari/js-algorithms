const swap = (q, i, j) => {
  let temp = q[i];
  q[i] = q[j];
  q[j] = temp;
};

const bubbleSort = (q) => {
  let n = q.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
      if (q[j] > q[j + 1]) {
        swap(q, j, j + 1);
      }
    }
  }
};
