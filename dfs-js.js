function dfs(graphData = {}, start, visited = new Ste()) {
  visited.add(start);
  console.log('start', start)
  graphData[start].forEach((neighbour) => {
    if (!visited.has(neighbour)) {
        dfs(graphData, neighbour, visited)
    }
  })
}

const graph = {
  'A' : ['B', 'C'],
  'B' : ['A', 'D', 'E'],
  'C' : ['A', 'F'],
  'D' : ['B'],
  'E' : ['B', 'E'],
  'F' : ['C', 'E']
}
console.log("DFS Traversal")
dfs(graph, 'A');
