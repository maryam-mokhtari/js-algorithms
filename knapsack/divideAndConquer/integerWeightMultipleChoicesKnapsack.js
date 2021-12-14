let choices = {}

const callKnapsack = (items, w) => {
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
  console.log('i:',index)
  choices = { ...choices, [w]: index }
  return max
}

const print = (items, w) => {
  while (w) {
    console.log(choices[w])
    w = w - items[choices[w]].weight
  }
}

const knapsack = (items, w) => {
  callKnapsack(items, w)
  print(items, w)
}
