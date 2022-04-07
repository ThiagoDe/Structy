const compress = (s) => {
  if(s.length === 1) return s 
  let i = 0;
  let j = 0;
  let newStr = []


    while (j <= s.length) {
        if(s[i] === s[j]){
            j += 1
        } else {
            n = j - i
            if (n === 1) {
               newStr.push(s[i])
                i = j 
            } else {
                newStr.push(n, s[i])
                i = j
            }
        }
    }
    // console.log(newStr)
    return newStr.join('')
};

console.log(compress('ccaaatsss'))