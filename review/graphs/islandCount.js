const islandCount = (grid) => {
  const visited = new Set();
  let totalIsland = 0;
  
  for (let r = 0; r < grid.length; r++){
    for (let c = 0; c < grid[0].length; c++){
        if (traverse(grid, r, c, visited)) totalIsland += 1;
    }
  }
  
  return totalIsland;
};

const traverse = (grid, r, c, visited) => {
  //check four directions and add to the visited set
  let rowBounds = r >= 0 && r < grid.length;
  let colBounds = c >= 0 && c < grid[0].length;
  let pos = r + ',' + c;
  
  if (!rowBounds || !colBounds) return false;
  if (grid[r][c] === 'W') return false;
  if (visited.has(pos)) return false;
    visited.add(pos);
    
    traverse(grid, r + 1, c, visited);
    traverse(grid, r - 1, c, visited);
    traverse(grid, r, c - 1, visited);
    traverse(grid, r , c + 1, visited);
    return true
  
}

























module.exports = {
  islandCount
};