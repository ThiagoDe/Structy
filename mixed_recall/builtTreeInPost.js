class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const buildTreeInPost = (inOrder, postOrder) => {
    if (inOrder.length === 0) return null;
    const value = postOrder[postOrder.length - 1];
    const root = new Node(value);
    const mid = inOrder.indexOf(value);
    const leftInOrder = inOrder.slice(0, mid);
    const righInOrder = inOrder.slice(mid + 1);
    const leftPostOrder = postOrder.slice(0, leftInOrder.length);
    const rightPostOrder = postOrder.slice(leftInOrder.length, -1);
    root.left = buildTreeInPost(leftInOrder, leftPostOrder);
    root.right = buildTreeInPost(righInOrder, rightPostOrder);
    

    return root;
};

console.log(buildTreeInPost(
  [ 'd', 'b', 'e', 'a', 'f', 'c', 'g' ],
  [ 'd', 'e', 'b', 'f', 'g', 'c', 'a' ] 
));
//      a
//    /    \
//   b      c
//  / \    / \
// d   e  f   g