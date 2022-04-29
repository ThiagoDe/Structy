const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = graphBuilder(edges);
  
  return explore(graph, nodeA, nodeB, new Set());
};

const explore = (graph, nodeA, nodeB, visited) => {
  if (nodeA === nodeB) return true;
  if (visited.has(nodeA))return false;
  visited.add(nodeA);
  
  for (let neighbor of graph[nodeA]){
    if (explore(graph, neighbor, nodeB, visited)) return true;
  }
  return false;
}

const graphBuilder = (edges) => {
  let graph = {};
  
  for (let arr of edges){
    const [a, b] = arr;
    if (!(a in graph)) graph[a] = [];
    graph[a].push(b);
    
    if (!(b in graph)) graph[b] = [];
    graph[b].push(a);
  }
  
  return graph;
}