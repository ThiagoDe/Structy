const maxValue = (nums) => {
  // todo
  let max = nums[0] 
  nums.forEach(n => {
    if(n > max) {
      max = n }
  })
  return max
};