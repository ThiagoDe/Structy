const parentheticalPossibilities = (s) => {
    if (s.length === 0) return [''];

    const allPossibilities = [];

    const { choices, remainder } = getChoices(s);
   
    for (let choice of choices){
        const possibles = parentheticalPossibilities(remainder);
        for (let substring of possibles){
            allPossibilities.push(choice + substring);
        }
    }

    return allPossibilities;
};

const getChoices = (s) => {
    if (s[0] === '('){
        const end = s.indexOf(')');
        const choices = s.slice(1, end);
        const remainder = s.slice(end + 1);
        return {
            choices,
            remainder
        }
    } else {
        return {
            choices : s[0],
            remainder: s.slice(1)
        }
    }
}
console.log(parentheticalPossibilities('x(mn)yz')); // -> 
// [ 'xmyz', 'xnyz' ]