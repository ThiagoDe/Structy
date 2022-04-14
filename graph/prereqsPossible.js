const numCourses = 6;
const prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
];
const prereqsPossible = (numCourses, prereqs) => {
    const graph = graphBuilder(numCourses, prereqs)
    const visiting = new Set();
    const visited = new Set();

    for (let node in graph){
        if (cycleDetect(graph, node, visiting, visited)) return false;
    }

    return true;
};

const cycleDetect = (graph, node, visiting, visited) => {
    if (visited.has(node)) return false;
    if (visiting.has(node)) return true;
    visiting.add(node);

    for (let neighbor of graph[node]){
        if (cycleDetect(graph, neighbor, visiting, visited)) return true;
    }

    visiting.delete(node);
    visited.add(node);
}

const graphBuilder = (numCourses, prereqs) => {
    const graph = {};

    for (let i = 0; i < numCourses; i++){
        graph[i] = []
    }

    for (let prereq of prereqs){
        const [ a, b ] = prereq;
        graph[a].push(b);
    }

    return graph;
}

console.log(prereqsPossible(numCourses, prereqs)); // -> true