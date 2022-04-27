const uncompress = (s) => {
    let nums = '1234567890';
    let i = 0;
    let j = 0;
    let result = [];

    while (j < s.length) {
        if (nums.includes(s[j])){
            j += 1;
        } else {
            let num = Number(s.slice(i, j));
            for (let count = 0; count < num; count++ ){
                result.push(s[j])
            }
            j += 1;
            i = j;
        }
    }
    
    return result.join('');
};

console.log(uncompress("2c3a1t")); // -> 'ccaaat'