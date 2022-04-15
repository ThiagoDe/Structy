const summingSquares = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if ( n === 0) return 0;

    let minSquare = Infinity;
    for (let i = 1; i <= Math.sqrt(n); i++){
        const square = i * i;
        const numSquare = 1 + summingSquares(n - square, memo);
        minSquare = Math.min(numSquare, minSquare);
    }

    memo[n] = minSquare;
    return memo[n];
};

console.log(summingSquares(87)); // -> 4