const grid = [
  [1, 3, 12],
  [5, 1, 1],
  [3, 6, 1],
];

const maxPathSum = (grid, r= 0, c=0, memo = {}) => {
    const pos = r + ',' + c;
    if (pos in memo) return memo[pos];
    if (r === grid.length || c === grid[0].length ) return 0;
    let maxSum = 0;
    if ( r === grid.length - 1 && c === grid[0].length - 1) {
        memo[pos] = grid[r][c];
        maxSum = Math.max(memo[pos], maxSum);
    }

    const sumRight = maxPathSum(grid, r + 1, c, memo);
    const sumDown = maxPathSum(grid, r, c + 1, memo);
    memo[pos] = sumRight + sumDown;

    maxSum = Math.max(memo[pos], maxSum)
    return maxSum;
};

console.log(maxPathSum(grid)); // -> 18