const minimumIsland = (grid) => {
  const visited = new Set();
  let smallest = Infinity;
  
  for (let r = 0; r < grid.length; r++){
    for (let c = 0; c < grid[0].length; c++){
      let size = explore(grid, r, c, visited);
      if (size > 0 && size < smallest) smallest = size;
    }
  }
  
  return smallest;
};

const explore = (grid, r, c, visited) => {
  let rowInbounds = r >= 0 && r < grid.length;
  let colInbounds = c >= 0 && c < grid[0].length;
  let pos = r + ',' + c;
  if (!rowInbounds || !colInbounds || visited.has(pos)) return 0;
  if (grid[r][c] === 'W') return 0;
  visited.add(pos);
  
  let size = 1;
  
    size += explore(grid, r + 1, c, visited);// down
    size += explore(grid, r - 1, c, visited);// up
    size += explore(grid, r, c + 1, visited);// right
    size += explore(grid, r, c - 1, visited); // left
  
  
  return size;
}
























module.exports = {
  minimumIsland
};