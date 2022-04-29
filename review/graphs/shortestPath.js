const shortestPath = (edges, nodeA, nodeB) => {
  const graph = graphBuilder(edges);
  
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