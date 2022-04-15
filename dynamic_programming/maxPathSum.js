const grid = [
  [1, 3, 12],
  [5, 1, 1],
  [3, 6, 1],
];

const maxPathSum = (grid, r= 0, c=0, memo = {}) => {
    const pos = r + ',' + c;
    if (pos in memo) return memo[pos];

    if (r === grid.length || c === grid[0].length ) return - Infinity;
    if ( r === grid.length - 1 && c === grid[0].length - 1) {
        memo[pos] = grid[r][c];
        return memo[pos];
    }

    const sumDown = maxPathSum(grid, r + 1, c, memo);
    const sumRight = maxPathSum(grid, r, c + 1, memo);

    memo[pos] = grid[r][c] + Math.max(sumRight, sumDown) 
    return memo[pos];
};

console.log(maxPathSum(grid)); // -> 18