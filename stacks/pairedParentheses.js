const pairedParentheses = (str) => {
    let countOpen = 0;
    for (let i = 0; i < str.length; i++){
        if (countOpen < 0) return false;
        if (str[i] === '(' ) countOpen += 1;
        if (str[i] === ')' ) countOpen -= 1;
    }
    return countOpen === 0;
}
console.log(pairedParentheses("(david)((abby))")); // -> true
