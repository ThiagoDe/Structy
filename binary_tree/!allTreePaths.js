const { Node } = require('./nodeClass');

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
const allTreePaths = (root) => {
    if (root === null) return [];
    if (root.left === null && root.right === null) return [ [root.val] ];
    const leftPath = allTreePaths(root.left);
    const rightPath = allTreePaths(root.right);
    const paths = [];

    for (let subpath of leftPath ) {
        paths.push([ root.val, ...subpath ]);
    }
    for (let subpath of rightPath ) {
        paths.push([ root.val, ...subpath ]);
    }

    return paths;
};

console.log(allTreePaths(a)); // ->
// [ 
//   [ 'a', 'b', 'd' ], 
//   [ 'a', 'b', 'e' ], 
//   [ 'a', 'c', 'f' ] 
// ] 
