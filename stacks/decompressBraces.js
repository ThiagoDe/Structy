const decompressBraces = (s) => {
    const stack = [];
    const numbers = '123456789'
    for (let char of s){
       if (numbers.includes(char)){
           stack.push(Number(char));
       } else {
           if (char === '}'){
            let segment = '';
            while (typeof stack[stack.length - 1] !== 'number'){
                const popped = stack.pop();
                segment = popped + segment;
            }
            const num = stack.pop();
            stack.push(repeat(segment, num))
           } else if (char !== '{') {
               stack.push(char);
           }
       }
    }
    return stack.join('');
};

const repeat = (str, n) => {
    let result = '';
    for (let i = 0; i < n; i++){
        result += str;
    }

    return result;
}

console.log(decompressBraces("2{q}3{tu}v")); 
// -> qqtututuv 