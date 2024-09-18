function bfs(graphData = {}, start) {
  console.log('start', start)
  const  visited = new Ste();
  const queue = [start];
  while (queue.length > 0) {
    //read the first element of the queue
    const vertex = queue.shift();
    if (!visited.has(vertex)) {
      visited.add(vertex);
      queue.push(...graphData[vertex].filter(neighbour => !visited.has(neighbour)));
    }
  }
}

const graph = {
  'A' : ['B', 'C'],
  'B' : ['A', 'D', 'E'],
  'C' : ['A', 'F'],
  'D' : ['B'],
  'E' : ['B', 'E'],
  'F' : ['C', 'E']
}
console.log("BFS Traversal")
bfs(graph, 'A');
