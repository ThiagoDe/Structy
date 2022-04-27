const pairSum = (numbers, targetSum) => {
    let count = {};

    for ( let i = 0; i < numbers.length; i++){
        let diffence = targetSum - numbers[i];
        if (diffence in count) return [ count[diffence], i];
        count[numbers[i]] = i;
    }
};

console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]