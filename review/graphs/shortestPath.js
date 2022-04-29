const shortestPath = (edges, nodeA, nodeB) => {
  const graph = graphBuilder(edges);
  const visited = new Set([nodeA]);
  let queue = [[nodeA, 0]];
  
  while (queue.length > 0){
    let [node, level] = queue.shift();
    if (node === nodeB) return level;
    
    for (let neighbor of graph[node]){
      if (!visited.has(neighbor)){
        visited.add(neighbor);
        queue.push([neighbor, level + 1]);
      }
      
    }
  }
  return -1;
};



const graphBuilder = (edges) => {
  const graph = {};
  
  for (let arr of edges){
    const [a , b] = arr;
    
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}
























module.exports = {
  shortestPath
};