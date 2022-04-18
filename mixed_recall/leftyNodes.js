class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

//      a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h

const leftyNodes = (root) => {
    const values = [];
    traverse(root, 0, values);
    return values;
};

const traverse = (root, level, values) => {
    if (root === null) return;

    if (values.length === level){
        values.push(root.val)
    }
    traverse(root.left, level + 1, values);
    traverse(root.right, level + 1, values);

}
console.log(leftyNodes(a)); // [ 'a', 'b', 'd', 'g' ]

