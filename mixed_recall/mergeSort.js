const mergeSort = (nums) => {
    const mid = Math.floor(nums.length / 2);

    if (nums.length <= 1) return nums;
    // console.log(mid);
    
    const left = mergeSort(nums.slice(0, mid));
    const right = mergeSort(nums.slice(mid));
    // console.log(left);
    // console.log(right);
    return merge(left, right)
};

const merge = (left, right) => {
    left.reverse();
    right.reverse();

    const arr = [];
    while (left.length > 0 && right.length > 0) {
        // console.log(left[0])
        if (left[left.length - 1] < right[right.length - 1]){
            arr.push(left.pop());
        } else {
            arr.push(right.pop());
        }
    }
    arr.push(...left.reverse());
    arr.push(...right.reverse());
    return arr;
}
const numbers = [10, 4, 42, 5, 8, 100, 5, 6, 12, 40];
console.log(mergeSort(numbers));
// -> [ 4, 5, 5, 6, 8, 10, 12, 40, 42, 100 ] 
