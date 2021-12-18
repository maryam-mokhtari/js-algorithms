
const knapsack = (items, w) => {
  let choices = []
  let values = []
  const n = items.length

  const callKnapsack = () => {
    for (let i = 0; i < n; i++) {
      if (!values[i]) {
        values[i] = []
        choices[i] = []
      }
      for (let j = 0; j <= w; j++) {
        if (i > 0 && values[i - 1][j]) {
          values[i][j] = values[i - 1][j]
        } else {
          values[i][j] = 0
        }
        if (j >= items[i].weight) {
          let prevVal =
            values[i - 1] && values[i - 1][j - items[i].weight] >= 0 ? values[i - 1][j - items[i].weight] : 0
          const value = items[i].value + prevVal
          if (value > values[i][j]) {
            values[i][j] = value
            choices[i][j] = true
          }
        }
      }
    }
  }

  const print = (n, w) => {
    let result = null
    if (n < 0 || w <= 0) return
    if (choices[n][w]) {
      w = w - items[n].weight
      result = n
    }
    if (result !== null) {
      console.log(result)
    }
    print(n - 1, w)
  }

  callKnapsack()
  print(n - 1, w)
}

