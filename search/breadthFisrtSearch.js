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

const BFS = (adjs, root) => {
  let visited = [];
  visited[root] = true;
  let queue = [root];
  while (queue.length) {
    let r = queue.shift();
    console.log(r);
    adjs[r] &&
      adjs[r].forEach((i) => {
        if (!visited[i]) {
          visited[i] = true;
          queue.push(i);
        }
      });
  }
};

// When we are looking for a key:
const BFS_k = (adjs, root, key) => {
  let visited = [];
  visited[root] = true;
  let queue = [root];
  while (queue.length) {
    let r = queue.shift();
    console.log(r);
    if (r === key) {
      console.log(":)");
      return;
    }
    adjs[r] &&
      adjs[r].forEach((i) => {
        if (!visited[i]) {
          visited[i] = true;
          queue.push(i);
        }
      });
  }
  console.log(":(");
};

// Save the path of the found key instead of just logging:
const BFS_path = (adjs, root, key) => {
  let visited = [];
  let path = [];
  visited[root] = true;
  let queue = [root];
  while (queue.length) {
    let r = queue.shift();
    path.push(r);
    if (r === key) {
      console.log(path);
      return;
    }
    adjs[r] &&
      adjs[r].forEach((i) => {
        if (!visited[i]) {
          visited[i] = true;
          queue.push(i);
        }
      });
  }
  console.log("Not found");
};
