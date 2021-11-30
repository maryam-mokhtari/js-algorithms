const hanoi = (n, a, b, c) => {
  if (n === 0) return
  hanoi(n-1, a, c, b)
  console.log(a, '->', c)
  hanoi(n-1, b, a, c)
}

// Sample:
hanoi(3,'A','B','C')

// Result:
// A -> C
// A -> B
// C -> B
// A -> C
// B -> A
// B -> C
// A -> C
