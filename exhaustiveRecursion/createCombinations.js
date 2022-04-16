const createCombinations = (items, k) => {
    if (k === 0) return [[]];
    if (k > items.length) return [];

    const first = items[0];
    const partialCombos = createCombinations(items.slice(1), k - 1);
    const combosWithFirst = [];

    for (let partialCombo of partialCombos) {
        combosWithFirst.push([first, ...partialCombo ])
    }

    const combosWithoutFirst = createCombinations(items.slice(1), k);
    return [...combosWithFirst, ...combosWithoutFirst ]
};

console.log(createCombinations(["a", "b", "c"], 2)); // ->
// [
//   [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'b', 'c' ]
// ]
