const quickestConcat = (s, words) => { 
    const answer =  _quickestConcat(s, words);

    if (answer === Infinity){
        return - 1;
    } else {
        return answer;
    }
};

const _quickestConcat = (s, words, memo = {}) => {
    if (s === '') return 0;
    if (s in memo) return memo[s];
    let minWords = Infinity;

    for (let word of words){
        if (s.startsWith(word)){
            let suffix = s.slice(word.length);
            const attempt = 1 + _quickestConcat(suffix, words, memo);
            minWords = Math.min(
                attempt,
                minWords
            )
        } 
    }

    memo[s] = minWords;
    return memo[s];
}

console.log(quickestConcat('respondorreact', ['re', 'or', 'spond', 'act', 'respond'])); // -> 4