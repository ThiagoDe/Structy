const { Node } = require('./nodeClass');

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeValueCount = (root, target) => {
//   if (root === null) return 0;
//   let counter = 0;
//   let queue = [ root ]

//   while (queue.length > 0) {
//       let current = queue.shift();
//       if (current.val === target) counter += 1;

//       if (current.left) queue.push(current.left);
//       if (current.right) queue.push(current.right);
//   }

//   return counter;
    if (root === null) return 0;
    let counter = 0
    let current = root
    if (current.val === target) counter += 1
    return (counter + treeValueCount(current.left, target) + treeValueCount(current.right, target))

};

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

console.log(treeValueCount(a,  6)); // -> 3