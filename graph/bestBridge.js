const grid = [
  ["W", "L", "W", "W", "W", "W", "W", "W"],
  ["W", "L", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "L", "W"],
  ["W", "W", "W", "W", "W", "W", "L", "L"],
  ["W", "W", "W", "W", "W", "W", "W", "L"],
];
const bestBridge = (grid) => {
    let mainIsland;
    for (let r = 0; r < grid.length; r++){
        for (let c = 0; c < grid[0].length; c++){
           const potentialIsland = traverseIsland(grid, r, c, new Set());
           if (potentialIsland.size > 0) { // set uses .size not .length
               mainIsland = potentialIsland;
               break;
           }
        }
    }
    
    const visited = new Set(mainIsland)
    const queue = [];
    for (let pos of mainIsland) {
        const [ r, c ] = pos.split(',').map(Number);
       
        queue.push([r, c, 0]);
    }

    while (queue.length > 0) {
        const [ r, c , distance ] = queue.shift();
        const pos = r + ',' + c;
        if (grid[r][c] === 'L' && !mainIsland.has(pos)) {
            return distance -1;
        }
        const deltas = [[1, 0],[-1, 0], [0, 1], [0, -1] ]
        for (let delta of deltas) {
            const [ deltaRow, deltaCol ] = delta;
            const neighborRow = r + deltaRow;
            const neighborCol = c + deltaCol;
            const neighborPos = neighborRow + ',' + neighborCol;
            if (isInbounds(grid, neighborRow, neighborCol) && !visited.has(neighborPos)){
                visited.add(neighborPos);
                queue.push([neighborRow, neighborCol, distance + 1]);
            }
        }
    }
};

const isInbounds = (grid, r, c) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    return rowInbounds && colInbounds;
}

const traverseIsland = (grid, r, c, visited) => {
    if (!isInbounds(grid, r, c) || grid[r][c] === 'W') return visited;

    const pos = r + ',' + c;
    if (visited.has(pos)) return visited;
    visited.add(pos);

   traverseIsland(grid, r + 1, c, visited);
   traverseIsland(grid, r - 1, c, visited);
   traverseIsland(grid, r, c + 1, visited);
   traverseIsland(grid, r, c - 1, visited);

   return visited;
}

console.log(bestBridge(grid)); // -> 1

