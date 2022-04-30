const closestCarrot = (grid, startRow, startCol) => {
  const queue = [[startRow, startCol, 0]]
  const visited = new Set([startRow + ',' + startCol]);
  
  while (queue.length > 0) {
    const [r, c, distance] = queue.shift();
    if (grid[r][c] === 'C') return distance;
    
    let deltas = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    
    for (let delta of deltas){
      const [deltaR, deltaC] = delta;
      let newRow = r + deltaR;
      let newCol = c + deltaC;
      let rowInbounds = newRow >= 0 && newRow < grid.length;
      let colInbounds = newCol >= 0 && newCol < grid[0].length;
      let pos = newRow + ',' + newCol;
      if (rowInbounds && colInbounds && !visited.has(pos) && grid[newRow][newCol] !== 'X'){
        visited.add(pos);
        queue.push([newRow, newCol, distance + 1])
      }
    }
  }
  
  return - 1;
};

const grid = [
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['O', 'X', 'C', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['C', 'O', 'O', 'O', 'O'],
];

console.log(closestCarrot(grid, 1, 2)); // -> 4
