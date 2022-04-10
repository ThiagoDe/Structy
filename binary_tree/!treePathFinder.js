const { Node } = require('./nodeClass');
const { print } = require('../linked_list/printList');

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


const pathFinder = (root, target) => {
    const result = pathFinderHelper(root, target);
    if (!result) return null;
    return result.reverse() 
}

const pathFinderHelper = (root, target) => {
    if (root === null) return null;
    if (root.val === target) return [root.val]
    // console.log(root.left);
    // console.log(root.right);
    const leftPath = pathFinderHelper(root.left, target);
    const rightPath = pathFinderHelper(root.right, target)
    if (leftPath !== null){ 
        leftPath.push(root.val);
        return leftPath
    }
    if (rightPath !== null) {
        rightPath.push(root.val);
        return rightPath
    }
    return null;
};

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(pathFinder(a, 'f')); // -> [ 'a', 'b', 'e' ]