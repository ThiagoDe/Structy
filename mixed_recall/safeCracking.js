const safeCracking = (hints) => {
    const graph = buildGraph(hints);
    const numParents = {};

    for (let node in graph){
        numParents[node] = 0;
    }

    for (let node in graph){
        for (let child of graph[node]){
            numParents[child] += 1
        }
    }

    const ready = [];

    for (let node in numParents){
        if (numParents[node] === 0) ready.push(node);
    }
    
    const order = [];

    while (ready.length > 0){
        const node = ready.pop();
        order.push(node);
        for (let child of graph[node]){
            numParents[child] -= 1;
            if (numParents[child] === 0) ready.push(child)
        }
    }
    return order.join('');

};

const buildGraph = (hints) => {
    const graph = {};
    

    for (let pair of hints){
        const [a, b] = pair;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
    }
    return graph;
}

console.log(safeCracking([
  [3, 1],
  [4, 7],
  [5, 9],
  [4, 3],
  [7, 3],
  [3, 5],
  [9, 1],
])); // -> '473591'