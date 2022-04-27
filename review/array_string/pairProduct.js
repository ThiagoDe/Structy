const pairProduct = (numbers, targetProduct) => {
    let count = {};
    for (let i = 0; i < numbers.length; i++){
        let find = targetProduct / numbers[i]

        if (find in count) return [count[find], i ];
        count[numbers[i]] = i;

    }
}

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
