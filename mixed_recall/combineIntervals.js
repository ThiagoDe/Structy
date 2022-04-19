const combineIntervals = (intervals) => {
    intervals.sort((intervalA, intervalB) => intervalA[0] - intervalB[0])
}

const intervals = [
  [6, 8],
  [2, 9],
  [10, 12],
  [20, 24],
];
console.log(combineIntervals(intervals));
// -> [ [2, 9], [10, 12], [20, 24] ]