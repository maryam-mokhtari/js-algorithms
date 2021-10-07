const minCost = (cost, visited) => {
  let min = Number.MAX_VALUE;
  let minV = null;
  for (i = 0; i < cost.length; i++) {
    if (cost[i] < min && !visited[i]) {
      min = cost[i];
      minV = i;
    }
  }
  return minV;
};

const findCost = (r, v, cost, parent) => {
  const newCost = cost[r] + g[r][v];
  if (newCost < cost[v]) {
    cost[v] = newCost;
    parent[v] = r;
  }
};

const dijkstra = (
  g,
  source,
  r,
  cost = Array(g.length).fill(Number.MAX_VALUE),
  parent = [],
  visited = []
) => {
  if (r === source || r == null) {
    r = source;
    cost[r] = 0;
  }
  while (r !== null) {
    visited[r] = true;
    Object.keys(g[r]).forEach((i) => {
      findCost(r, i, cost, parent);
    });

    r = minCost(cost, visited);
  }
  return { cost, parent };
};

const findPath = (g, source, destination) => {
  const { cost, parent } = dijkstra(g, source);
  let v = destination;
  const path = [v];
  while (v) {
    v = parent[v];
    path.unshift(v);
  }
  return path;
};
