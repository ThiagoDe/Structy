class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const postOrder = (root) => {
    const values = [];
    postOrderTraversal(root, values);
    return values;
};

const postOrderTraversal = (root, values) => {
    if (root === null) return;
    postOrderTraversal(root.left, values);
    postOrderTraversal(root.right, values);
    values.push(root.val);
}

const x = new Node('x');
const y = new Node('y');
const z = new Node('z');

x.left = y;
x.right = z;

//       x
//    /    \
//   y      z

console.log(postOrder(x));
// ['y', 'z', 'x']