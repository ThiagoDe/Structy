const graph = {
  a: ['c', 'b'],
  b: ['c'],
  c: []
};

const longestPath = (graph) => {
    const distance = {};
    
    for (let node in graph) { // keys a: b: c:
        if (graph[node].length === 0){
            distance[node] = 0;
        }
    }

    for (let node in graph){ // keys a: b: c:
        traverseDistance(graph, node, distance); // graph, a:, {c: 0} // graph, b:, {c: 0}// graph, c:, {c: 0}
    }

    return Math.max(...Object.values(distance));
};

const traverseDistance = (graph, node, distance) => {// graph, a:, {c: 0}
    if ( node in distance) return distance[node]; // graph, c:, {c: 0} // 0, 

    let maxLength = 0;
    for (let neighbor of graph[node]) { // graph[a] = ['c', 'b'], ['c']
        const attempt = traverseDistance(graph, neighbor, distance) // graph, 'b', {c: 0}
        if (attempt > maxLength) maxLength = attempt; // maxLength = 1;
    }

    distance[node] = 1 + maxLength; // distance[b] = 1 + 1
    return distance[node] // 2 
}

console.log(longestPath(graph)); // -> 2