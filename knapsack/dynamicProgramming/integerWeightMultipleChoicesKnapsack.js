const knapsack = (items, w) => {
  let choices = []
  let values = []

  const callKnapsack = () => {
    const n = items.length
    for (let i = 0; i <= w; i++) {
      let maxIndex = 0
      let max = 0
      for (let j = 0; j < n; j++) {
        if (i >= items[j].weight) {
          const value = items[j].value + values[i - items[j].weight]
          if (value > max) {
            max = value
            maxIndex = j
          }
        }
      }
      values[i] = max
      choices[i] = maxIndex
    }
  }

  const print = () => {
    console.log('Max Value:', values[w])
    while (w) {
      console.log(`${choices[w]}: {w: ${items[choices[w]].weight}, v: ${items[choices[w]].value}}`)
      w = w - items[choices[w]].weight
    }
  }

  const printK = () => {
    console.log(values[w])
    if (w <= 0) return ''
    return choices[w] + ':' + printK(items, w - items[choices[w]].weight)
  }

  callKnapsack()
  print()
  //console.log(printK())
}
