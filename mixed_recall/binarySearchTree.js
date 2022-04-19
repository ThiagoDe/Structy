class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(12);
const b = new Node(5);
const c = new Node(18);
const d = new Node(3);
const e = new Node(9);
const f = new Node(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   5     18
//  / \     \
// 3   9     19

const binarySearchTreeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  if (root.val > target) {
      return binarySearchTreeIncludes(root.left, target);
  } else {
      return binarySearchTreeIncludes(root.right, target)
  }

};

console.log(binarySearchTreeIncludes(a, 9)); // -> true
console.log(binarySearchTreeIncludes(a, 15)); // -> false
