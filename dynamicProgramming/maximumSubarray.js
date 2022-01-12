// "Maximum Subarray Sum" or "Largest Sum Contiguous Subarray" is one of the challenging as well as simply solved by DP.
// Example:
// Given an array as an input: [3, -4, 5, -2, -1, 3, 2, -7, 6] 
// The MSS Output: [5, -2, -1, 3, 2]
// We try to solve this problem first by using "Divide and Conquer" and then "Dynamic Programming", while DP is both faster and simpler to deploy.

// ** Divide and Conquer **
const maxCrossSubarray = (q, low, mid, high) => {
  const n = q.length - 1
  let leftSum = -Number.MAX_VALUE
  let rightSum = -Number.MAX_VALUE
  let sum = 0,
    start = mid,
    end = mid
  for (let i = mid; i >= 0; i--) {
    sum = sum + q[i]
    if (sum > leftSum) {
      leftSum = sum
      start = i
    }
  }
  sum = 0
  for (let i = mid + 1; i < n; i++) {
    sum = sum + q[i]
    if (sum > rightSum) {
      rightSum = sum
      end = i
    }
  }
  return [leftSum + rightSum, start, end]
}

const maxSubarray = (q, low, high) => {
  if (low === high) {
    return [q[low], low, high]
  } else {
    const mid = Math.floor((low + high) / 2)
    const [leftSum, leftLow, leftHigh] = maxSubarray(q, low, mid)
    const [crossSum, crossLow, crossHigh] = maxCrossSubarray(q, low, mid, high)
    const [rightSum, rightLow, rightHigh] = maxSubarray(q, mid + 1, high)
    if (leftSum >= rightSum && leftSum >= crossSum) {
      return [leftSum, leftLow, leftHigh]
    } else if (rightSum >= leftSum && rightSum >= crossSum) {
      return [rightSum, rightLow, rightHigh]
    } else {
      return [crossSum, crossLow, crossHigh]
    }
  }
}

const printSubarray = q => {
  const [sum, start, end] = maxSubarray(q, 0, q.length-1)
  return q.slice(start, end + 1)
}

// ** Dynamic Programming **
const mss = q => {
  const n = q.length
  const s = []
  let max = 0, index, start, end
  for (let i = 0; i < n; i++) {
    if (s[i - 1] && s[i - 1] + q[i] > q[i]) {
      s[i] = s[i - 1] + q[i]
    } else {
      index = i
      s[i] = q[i]
    }
    if (s[i] > max) {
      max = s[i]
      start = index
      end = i + 1
    }
  }
  return q.slice(start, end)
}
