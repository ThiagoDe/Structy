const compress = (s) => {
    let nums = '1234567890';
    let i = 0;
    let j = 0;
    let total = 0;
    let result = [];

    while (j <= s.length){
        if (s[i] === s[j]) {
            total += 1;
            j += 1;
        } else {
            if (total === 1) {
                result.push(s[i]);
            } else {
                result.push(total, s[i]);
            }
            total = 0;
            i = j;
            
        }

    }
    return result.join('');
};

console.log(compress('nnneeeeeeeeeeeezz')); // -> '3n12e2z'
