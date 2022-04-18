const breakingBoundaries = (m, n, k, r, c, memo={}) => {
    const key = `${k},${r}, ${c}`
    if (key in memo) return memo[key];
    const rowInbounds = 0 <= r && r < m;
    const colInbounds = 0 <= c && c < n;

    if (!rowInbounds || !colInbounds) return 1;
    if (k === 0) return 0;

    let totalCount = 0;
    const deltas = [[1, 0],[0, 1], [-1, 0], [0, -1]];
    for (let delta of deltas) {
        const [ dRow, dCol ] = delta;
        totalCount += breakingBoundaries(m, n, k - 1, r + dRow, c + dCol);
    }

    memo[key] = totalCount;
    return totalCount;
};

console.log(breakingBoundaries(3, 4, 2, 0, 0)); // -> 4
