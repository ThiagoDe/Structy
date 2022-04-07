const mostFrequentChar = (s) => {
  // todo
    let count = {};
    let char = s[0]
    for (el of s) {
        if(count[el]){ 
            count[el] += 1
        } else {
            count[el] = 1
        }
    }
    console.log(count)
    for(el of s){
        if(count[el] > count[char]) char = el 
    }
    return char 
};

console.log(mostFrequentChar('mississippi'))