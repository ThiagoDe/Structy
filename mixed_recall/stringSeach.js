const stringSearch = (grid, s) => {

    for (let r = 0; r < grid.length; r++){
        for (let c = 0; c < grid[0].length; c++){
            if (dfs(grid, r, c, s, new Set())) return true;
        }
    }
    return false;
}

const dfs = (grid, r, c, s) => {
  
    if (s.length === 0) return true;
    const rowInbounds = r >= 0 && r < grid.length;
    const colInbounds = c >= 0 && c < grid[0].length;

    if (!rowInbounds || !colInbounds) return false;
    if (s[0] !== grid[r][c]) return false;

    const suffix = s.slice(1);
    const char = grid[r][c];
    grid[r][c] = '*';
    const result = dfs(grid, r - 1, c, suffix) ||
    dfs(grid, r + 1, c, suffix) ||
    dfs(grid, r, c - 1, suffix) ||
    dfs(grid, r, c + 1, suffix) 
    grid[r][c] = char;
    return result;
}

const grid = [
  ['e', 'y', 'h', 'i', 'j'],
  ['q', 'x', 'e', 'r', 'p'],
  ['r', 'o', 'l', 'l', 'n'],
  ['p', 'r', 'x', 'o', 'h'],
  ['a', 'a', 'm', 'c', 'm']
];
console.log(stringSearch(grid, 'hello')); // -> true
