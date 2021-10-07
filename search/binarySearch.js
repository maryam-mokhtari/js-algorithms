// Array should be already sorted.

const binarySearch = (q, key, low = 0, high = q.length) => {
  if (low > high) {
    return -1;
  }
  let mid = parseInt((low + high) / 2);
  if (q[mid] < key) {
    return binarySearch(q, key, mid + 1, high);
  } else if (q[mid] > key) {
    return binarySearch(q, key, low, mid - 1);
  } else {
    return mid;
  }
};

// When the first occurrence of element is needed for repeated elemets:
const binarySearch_u_l = (q, key, low = 0, high = q.length) => {
  if (low > high) {
    return -1;
  }
  let mid = parseInt((low + high) / 2);
  if (q[mid] < key) {
    return binarySearch_u_l(q, key, mid + 1, high);
  } else if (
    q[mid] > key ||
    (q[mid] === key && mid > 0 && q[mid - 1] === key)
  ) {
    return binarySearch_u_l(q, key, low, mid - 1);
  } else {
    return mid;
  }
};

// When the last occurrence of element is needed for repeated elemets:
const binarySearch_u_r = (q, key, low = 0, high = q.length) => {
  if (low > high) {
    return -1;
  }
  let mid = parseInt((low + high) / 2);
  if (
    q[mid] < key ||
    (q[mid] === key && mid < q.length && q[mid + 1] === key)
  ) {
    return binarySearch_u_r(q, key, mid + 1, high);
  } else if (q[mid] > key) {
    return binarySearch_u_r(q, key, low, mid - 1);
  } else {
    return mid;
  }
};
