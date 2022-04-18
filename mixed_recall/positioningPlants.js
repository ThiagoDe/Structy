const positioningPlants = (costs, pos = 0, lastPlant = null, memo = {}) => {
    const key = pos + ',' + lastPlant;
    if (key in memo) return memo[key];
    if (pos === costs.length) return 0;

    let min = Infinity

    for (let plant = 0; plant < costs[pos].length; plant++ ){
        if (plant !== lastPlant) {
            const candidate = costs[pos][plant] + positioningPlants(costs, pos + 1, plant, memo);
            min = Math.min(candidate, min);
        }
    }
    memo[key] = min;
    return min;
};

console.log(positioningPlants([
  [4, 3, 7],
  [6, 1, 9],
  [2, 5, 3]
])); // -> 7, by doing 4 + 1 + 2.