const tokenTransform = (s, tokens) => {
    let output = []
    let i = 0;
    let j = 1;
    while (i < s.length) {
        if (s[i] !== '$'){
            output.push(s[i]);
            i += 1;
            j = i + 1;
        } else if (s[j] !== '$') {
            j += 1;
        } else {
            const key = s.slice(i, j + 1);
            const value = tokens[key];
            const evaluatedValue = tokenTransform(value, tokens)
            tokens[key] = evaluatedValue;
            output.push(evaluatedValue);
            i = j + 1;
            j = i + 1;
        }
    }
    return output.join('');
};

const tokens = {
  '$LOCATION$': '$ANIMAL$ park',
  '$ANIMAL$': 'dog',
};
console.log(tokenTransform('Walk the $ANIMAL$ in the $LOCATION$!', tokens));
// -> 'Walk the dog in the dog park!'