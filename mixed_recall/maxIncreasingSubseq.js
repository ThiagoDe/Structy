const numbers = [4, 18, 20, 10, 12, 15, 19];

const maxIncreasingSubseq = (numbers, i = 0, previous = -Infinity, memo={}) => {
    const key = i + ',' + previous;
    if (key in memo) return memo[key];
    if (i === numbers.length) return 0;

    const current = numbers[i];
    const options = [];
    const dontTakeCurrent = maxIncreasingSubseq(numbers, i + 1, previous);
    options.push(dontTakeCurrent);

    if (current > previous) {
        const TakeCurrent = 1 + maxIncreasingSubseq(numbers, i + 1, current);
        options.push(TakeCurrent);
    }
    memo[key] = Math.max(...options)
    return memo[key];
};

console.log(maxIncreasingSubseq(numbers)); // -> 5