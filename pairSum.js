const pairSum = (numbers, targetSum) => {
  // todo
    let counter = {}

    for (let i = 0; i < numbers.length; i++ ){
        let possibleNum = targetSum - numbers[i]
        console.log(possibleNum)
        if (possibleNum in counter) return([counter[possibleNum], i])
            counter[numbers[i]] = i 
        
    }
    console.log(counter)
};

console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [3, 5]