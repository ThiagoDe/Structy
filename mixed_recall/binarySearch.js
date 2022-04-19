const binarySearch = (numbers, target) => {
    if (numbers.length < 1) return - 1;
    const mid = Math.floor(numbers.length / 2);
    if (numbers[mid] === target) return mid;

    if (numbers[mid] > target) {
        return binarySearch(numbers.slice(0, mid), target);
    } else {
        let memo = binarySearch(numbers.slice(mid + 1), target);
        if (memo === -1) return - 1;
        return mid + memo + 1;
    }
};

console.log(binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 28)); // -> 8)