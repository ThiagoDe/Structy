const arrayStepper = (nums, i = 0, memo = {}) => { //[3, 1, 3, 1, 0, 1]
    if (i in memo) return memo[i];
    if (i >= nums.length - 1) return true; // 5

    const maxStep = nums[i]; // 3
    for (let step = 1; step <= maxStep; step += 1){
        if(arrayStepper(nums, i + step, memo) === true) {
            memo[i] = true;
            return true;
        }
    }

    memo[i] = false;
    return false;
};


console.log(arrayStepper([2, 3, 2, 0, 0, 1])); // -> true