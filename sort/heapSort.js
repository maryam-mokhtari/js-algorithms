const swap = (q, i, j) => {
  let temp = q[i];
  q[i] = q[j];
  q[j] = temp;
};

const heapify = (q, i, n) => {
  const l = 2 * i;
  const r = 2 * i + 1;
  let largest = i;

  if (l < n && q[l] > q[largest]) {
    largest = l;
  }
  if (r < n && q[r] > q[largest]) {
    largest = r;
  }

  if (largest != i) {
    swap(q, i, largest);
    heapify(q, largest, n);
  }
};

const heapSort = (q) => {
  const n = q.length;
  for (let i = parseInt(n / 2); i >= 0; i--) {
    heapify(q, i, n);
  }
  for (let i = n - 1; i >= 0; i--) {
    swap(q, i, 0);
    heapify(q, 0, i);
  }
};
