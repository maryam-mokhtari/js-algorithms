let choices = {}

const knapsack = (items, w) => {
  if (w <= 0) return 0
  const n = items.length
  let max = 0
  let index
  for (let i = 0; i < n; i++) {
    if (w >= items[i].weight) {
      const v = items[i].value
      const k = knapsack(items, w - items[i].weight)
      const value = v + k
      if (value > max) {
        max = value
        index = i
      }
    }
  }
  choices = { ...choices, [w]: index }
  return max
}

const print = (items, w) => {
  while (w) {
    console.log(w,choices[w])
    w = w - items[choices[w]].weight
  }
}

const callKnapsack = (items, w) => {
  knapsack(items, w)
  print(items, w)
}


