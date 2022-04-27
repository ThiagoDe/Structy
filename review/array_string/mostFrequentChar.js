const mostFrequentChar = (s) => {
    let count = {};

    for (let char of s){
        if (!(char in count)) count[char] = 0;
        count[char] += 1;
    }

    let best = s[0];
    for (let char of s){
        if (count[char] > count[best]) best = char;
    }

    return best;
};

console.log(mostFrequentChar('bookeeper')) // -> 'e'
