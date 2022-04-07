const pairProduct = (numbers, targetProduct) => {
  // todo
  let counter = {};
  
  for (let i = 0; i < numbers.length; i++){
    let num = numbers[i]
    let product = targetProduct / num
    if (product in counter) return [counter[product], i]
    counter[num] = i 
  }
};

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]