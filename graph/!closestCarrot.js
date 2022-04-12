const grid = [
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['O', 'X', 'C', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['C', 'O', 'O', 'O', 'O'],
];

const closestCarrot = (grid, startRow, startCol) => {
    const visited = new Set([ startRow + ',' + startCol ])
    let queue = [ [ startRow, startCol, 0 ] ];

    while (queue.length > 0) {
        let [ row, col, distance ] = queue.shift();
        if (grid[row][col] === 'C') return distance;

        const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (let delta of deltas) {
            const [ rowDelta, colDelta ] = delta;
            const neighborRow = row + rowDelta;
            const neighborCol = col + colDelta;
            rowInbounds = neighborRow >= 0 && neighborRow < grid.length;
            colInbounds = neighborCol >= 0 && neighborCol < grid[0].length;
            const pos = neighborRow + ',' + neighborCol;
            if (rowInbounds && colInbounds && grid[neighborRow][neighborCol] !== 'X' && !visited.has(pos)){
                queue.push([neighborCol, neighborRow, distance + 1])
                visited.add(pos)
            }
        }
    }

    return -1;
};

console.log(closestCarrot(grid, 1, 2)); // -> 4
