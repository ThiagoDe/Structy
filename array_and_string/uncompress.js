const uncompress = (s) => {
  // todo
  let numbers = '123456789'
  let result = []
  let i = 0
  let j = 0
  
 while (j < s.length) {
   if (numbers.includes(s[j])){
     j += 1
   } else {
     let num = Number(s.slice(i,j))
     for (let count = 0; count < num; count++){
       result.push(s[j])
     }
     j += 1
     i = j
   }
 }
  
  return result.join('') 
};

console.log(uncompress('2c3a1t'))