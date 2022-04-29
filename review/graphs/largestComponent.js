const largestComponent = (graph) => {
  const visited = new Set();
  let largest = 0;
  
  for (let node in graph){
    
    largest = Math.max(largest, explore(graph, node, visited))
  }
  return largest;
};

const explore = (graph, node, visited) => {
  if (visited.has(String(node))) return 0;
  visited.add(String(node));
  let sum = 0;
  for (let neighbor of graph[node]){
    sum += explore(graph, neighbor, visited);
  }
  return sum + 1;
}

























module.exports = {
  largestComponent
};