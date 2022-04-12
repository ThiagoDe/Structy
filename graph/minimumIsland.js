const grid = [
  ['W', 'W'],
  ['L', 'L'],
  ['W', 'W'],
  ['W', 'L']
];

const minimumIsland = (grid) => {
    const visited = new Set();
    let minSize = Infinity;
    
    for (let r = 0; r < grid.length; r++){
        for (let c = 0; c < grid[0].length; c++){
            let islandSize = explore(grid, r, c, visited);
            if (islandSize > 0 && islandSize < minSize) minSize = islandSize;
        }
    }
    return minSize;
};

const explore = (grid, r, c, visited) => {
    let rowInbound = r >= 0 && r < grid.length;
    let colInbound = c >= 0 && c < grid[0].length;
    if (!rowInbound || !colInbound) return 0;
    
    if (grid[r][c] === 'W') return 0

    let pos = r + ',' + c;
    if (visited.has(pos)) return 0;
    visited.add(pos);


    let size = 1;
    size += explore(grid, r + 1, c, visited);
    size += explore(grid, r - 1, c, visited);
    size += explore(grid, r, c + 1, visited);
    size += explore(grid, r, c - 1, visited);

    return size;
}

console.log(minimumIsland(grid)); // -> 1
