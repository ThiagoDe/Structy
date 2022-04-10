const { Node } = require('./nodeClass')

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root) => {
    if (root === null) return Infinity;
    let min = root.val;
    let leftNode = treeMinValue(root.left);
    let rightNode = treeMinValue(root.right);

    if (leftNode < min) min = leftNode;
    if (rightNode < min) min = rightNode;
    return min;
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(treeMinValue(a)); // -> -2