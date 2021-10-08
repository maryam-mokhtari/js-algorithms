const swap = (q, i, j) => {
  let temp = q[i];
  q[i] = q[j];
  q[j] = temp;
};

const merge = (q, low, mid, high) => {
  const left = [],
    right = [],
    ln = mid - low + 1,
    rn = high - mid;

  for (let i = 0; i < ln; i++) {
    left[i] = q[i + low];
  }
  for (let i = 0; i < rn; i++) {
    right[i] = q[i + mid + 1];
  }

  let li = 0;
  let ri = 0;
  let i = low;
  while (li < ln && ri < rn) {
    if (left[li] < right[ri]) {
      q[i++] = left[li++];
    } else {
      q[i++] = right[ri++];
    }
  }
  while (li < ln) {
    q[i++] = left[li++];
  }
  while (ri < rn) {
    q[i++] = right[ri++];
  }
};

const mergeSort = (q, low = 0, high = q.length - 1) => {
  if (low >= high) {
    return;
  }
  const mid = parseInt((low + high) / 2);
  mergeSort(q, low, mid);
  mergeSort(q, mid + 1, high);
  merge(q, low, mid, high);
};
