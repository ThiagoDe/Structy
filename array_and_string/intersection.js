const intersection = (a, b) => {
  // todo
//   let elements = {};

//   for (let i = 0; i < a.length; i++){
//     if(elements[a[i]]) elements[a[i]] += 1;
//     elements[a[i]] = 1;
//   }
//   for (let i = 0; i < b.length; i++){
//     if(elements[b[i]]){ 
//         elements[b[i]] += 1
//     }else {
//     elements[b[i]] = 1;
//     }
//   }
//   return Object.keys(elements).filter(el => elements[el] > 1).map(el => Number(el))
//   console.log(elements)
    const result = []
    const items = new Set()
    for (let item of a) {
        items.add(item)
    }

    for (let el of b) {
        if (items.has(el)) result.push(el)

    }
    return result
};

console.log(intersection([4,2,1,6], [3,6,9,2,10]))