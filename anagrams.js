const anagrams = (s1, s2) => {
  // todo
  let count = {}

  for (let char of s1) { // O(n)
    if (!(char in count)) count[char] = 0
    count[char] += 1
  }

  for (let char of s2) { // O(m)
      if (char in count) {
          count[char] -= 1
      } else {
          return false
      }
  }

  for (let char in count){ //O(n)
      if(count[char] !== 0) return false
  }
  return true 
  console.log(count)
};

console.log(anagrams('restful', 'fluster'))