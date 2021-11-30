// At first we try to write the simplest version of FIBUNACCI using a divide and conquer solution.
// This has an exponential order and slow down very soon by increasing the input value.

const fib = n => {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

// Another trial is to memoize the results in every step and use it in next function calls reducing runtime order from an exponential order to n^2
const memoFib = n => {
  const f = []
  const fib = n => {
    if (n < 2) {
      f[n] = n
    }
    else if (!f[n]) {
      f[n] = fib(n - 1) + fib(n - 2)
    }
    return f[n]
  }
  return fib(n)
}

// Last solution is "Dynamic Programming" using a very simple but fast method.
// In contrast with divide and conquer which is top-down, this is a bottom-up solution.
const DPFib = n => {
  const f = []
  for (let i = 0; i <= n; i++) {
    if (i < 2) {
      f[i] = i
    } else {
      f[i] = f[i - 1] + f[i - 2]
    }
  }
  return f[n]
}
