const combineIntervals = (intervals) => {
    const sortedIntervals = intervals.sort((intervalA, intervalB) => intervalA[0] - intervalB[0])
    const combined = [ sortedIntervals[0]];

    for (let currentInterval of sortedIntervals.slice(1)){
        const [ lastStart, lastEnd ] = combined[combined.length - 1];
        const [ currentStart, currentEnd ] = currentInterval;
        if ( currentStart <= lastEnd){
            
        }
    }

    return combined;
}

const intervals = [
  [6, 8],
  [2, 9],
  [10, 12],
  [20, 24],
];
console.log(combineIntervals(intervals));
// -> [ [2, 9], [10, 12], [20, 24] ]