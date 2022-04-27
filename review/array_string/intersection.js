const intersection = (a, b) => {
    let result = [];
    let set = new Set(a);
    for (let item of b){
        if(set.has(item)) result.push(item);
    }
    return result;
};

console.log(intersection([4,2,1], [1,2,4,6])) // -> [1,2,4]