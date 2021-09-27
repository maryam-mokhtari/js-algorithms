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
const DFS = (adjs, r, visited = []) => {
  console.log(r)
  adjs[r] && adjs[r].forEach(i => {
      if (!visited[i]) {
          visited[i] = true
          DFS(adjs, i, visited)
      }
  })
}

