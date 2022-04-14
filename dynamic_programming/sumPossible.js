const sumPossible = (amount, numbers, memo = {}) => {
    if (amount in memo) return memo[amount]
    if (amount < 0) return false;
    if (amount === 0) return true;
    if (numbers.length === 0) return false;

    for (let num of numbers){
        if (sumPossible( amount - num, numbers, memo)){ 
            memo[amount] = true; 
            return true
        }
    }

    memo[amount] = false;
    return false;

};
console.log(sumPossible(103, [6, 20, 1])); // -> true