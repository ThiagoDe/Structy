const largestComponent = (graph) => {
    const visited = new Set();
    let maxNodes = 0;

    for (let node in graph) {
        const size = exploreSize(graph, node, visited);
        if (size > maxNodes) maxNodes = size;
    }
    return maxNodes;
};

const exploreSize = (graph, node, visited) => {
    if (visited.has(node)) return 0;
     visited.add(node);

    let count = 1;

    for (let neighbor of graph[node]){
       count += exploreSize(graph, neighbor, visited)
    }
    return count;
}

console.log(largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
})); // -> 4