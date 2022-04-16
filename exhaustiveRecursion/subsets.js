const subsets = (elements) => {
    if (elements.length === 0) return [ [] ];

    const first = elements[0];
    const subWithoutFirst = subsets(elements.slice(1)); // half of the tree
    const subWithFirst = [];

    for (let sub of subWithoutFirst){
        subWithFirst.push([first, ...sub])
    }

    return [...subWithoutFirst, ...subWithFirst]
};

console.log(subsets(['a', 'b'])); // ->
// [ 
//   [], 
//   [ 'b' ], 
//   [ 'a' ], 
//   [ 'a', 'b' ] 
// ]
