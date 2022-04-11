const { Node } = require('./nodeClass');

const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3



const leafList = (root) => {
    // if (root === null) return [];
    // const stack = [ root ];
    // const leaves = [];

    // while (stack.length > 0){
    //     const current = stack.pop()
    //     if (current.left === null && current.right === null) leaves.push(current.val)

    //     if (current.right) stack.push(current.right);
    //     if (current.left) stack.push(current.left);
    // }

    // return leaves;
    const leaves = [];
    fillLeaves(root, leaves)
    return leaves;
};

const fillLeaves = (root, leaves) => {
    if (root === null) return;
    if (root.left === null && root.right === null) leaves.push(root.val)

    fillLeaves(root.left, leaves);
    fillLeaves(root.right, leaves);
}

console.log(leafList(a)); // -> [ 20, 1, 3, 54 ]