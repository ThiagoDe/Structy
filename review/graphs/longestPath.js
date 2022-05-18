const longestPath = (graph) => {
  let distances = {};
  
    for (let node in graph) {
     if (graph[node].length === 0) distances[node] = 0
    }
  
    for (let node in graph) {
      explore(graph, node , distances)
    }
  
  return Math.max(...Object.values(distances));
};

const explore = (graph, node, distances) => {
  if (node in distances) return distances[node];
  
  let max = 0
  for (let neighbor of graph[node]){
    let attempt = explore(graph, neighbor, distances);
    max = Math.max(max, attempt)
  }
  
  distances[node] = 1 + max;
  return  distances[node];
}

