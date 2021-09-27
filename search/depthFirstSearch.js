// ***** Breadth First Search *****
// adjs is an object or an array, reveals the nodes and their adjacents.
// Object sample:
// let adjs = {
//     1: [4, 5, 7],
//     3: [5, 7, 8],
//     5: [1, 8],
//     7: [1],
//     8: [4, 7]
// }
// Array sample:
// let adjs = [
//     [1, 5, 7],
//     [2, 3],
//     [8, 9, 4],
//     [12, 22],
//     [10, 15],
//     [14, 6]
// ]

// It could be a *Graph* e.g. first sample or a *Tree* e.g. second sample
DFS_main = (adjs, root) => {
  let visited = []

  const DFS_k = (r) => {
    console.log(r)
    adjs[r] &&
      adjs[r].forEach((i) => {
        if (!visited[i] && !found) {
          visited[i] = true
          DFS_k(i)
        }
      })
  }

  DFS_k(root)
}

// When we are looking for a key:
DFS_main = (adjs, root, key) => {
  let visited = []
  let found = false

  const DFS_k = (r) => {
    console.log(r)
    if (r === key) {
      console.log(":)")
      found = true
      return
    }
    adjs[r] &&
      adjs[r].forEach((i) => {
        if (!visited[i] && !found) {
          visited[i] = true
          DFS_k(i)
        }
      })
  }

  DFS_k(root)
}

// Save the path of the found key instead of just logging:
DFS_main = (adjs, root, key) => {
  let visited = []
  let path = []
  let found = false

  const DFS_k = (r) => {
    path.push(r)
    if (r === key) {
      console.log(path)
      found = true
      return
    }
    adjs[r] &&
      adjs[r].forEach((i) => {
        if (!visited[i] && !found) {
          visited[i] = true
          DFS_k(i)
        }
      })
  }

  DFS_k(root)
}
