const numCourses = 7;
const prereqs = [
  [4, 3],
  [3, 2], //{ '1': [ 0 ], '2': [ 1 ], '3': [ 2 ], '4': [ 3 ], '5': [ 2, 6 ] }
  [2, 1],
  [1, 0],
  [5, 2],
  [5, 6],
];
const semestersRequired = (numCourses, prereqs) => {
    const graph = graphBuilder(numCourses, prereqs);
    const distance = {};

    for (let course in graph){
        if (graph[course].length === 0) distance[course] = 1;
    }

    for (let course in graph){
        traverseDistance(graph, course, distance)
    }

    return Math.max(...Object.values(distance));
};

const traverseDistance = (graph, node, distance) => {
    if (node in distance) return distance[node];

    let maxDistance = 0;
    // console.log(graph[node]);
    // console.log(distance);
    for (let neighbor of graph[node]){
        const neighborDistance = traverseDistance(graph, neighbor, distance)
        if (maxDistance < neighborDistance) maxDistance = neighborDistance;
    }
    distance[node] = maxDistance + 1;

    return distance[node];
}

const graphBuilder = (numCourses, prereqs) => {
    const graph = {};

    for (let i = 0; i < numCourses; i++ ){
        graph[i] = [];
    }

    for (let prereq of prereqs){
        const [ key, val ] = prereq;
        graph[key].push(val);
    }
        // console.log(graph)
    return graph ;
}


console.log(semestersRequired(numCourses, prereqs)); // -> 5
