const hasPath = (graph, src, dst) => {
  if (src === dst) return true;
  
  
  for (let neighbor of graph[src]){ 
    if (hasPath(graph, neighbor, dst)) return true;
  }
  return false;
};

