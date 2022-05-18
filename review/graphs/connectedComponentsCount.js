const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;
  
  for (let node in graph){
   count += traverse(graph, node, visited);
  }
  return count;
}; 

const traverse = (graph, node, visited) => {
  if (visited.has(String(node))) return 0;
  visited.add(String(node));
  for (let neighbor of graph[node]){
    traverse(graph, neighbor, visited);
  }
  return 1;
}