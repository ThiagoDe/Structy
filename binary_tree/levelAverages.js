const { Node } = require('./nodeClass');

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
const levelAverages = (root) => {
    if (root === null) return [];
    const queue = [ {node: root, levelNum: 0} ]
    const paths = []
    const avaregeArr = [];

    while (queue.length > 0){
        const { node, levelNum } = queue.shift();

        if (paths.length === levelNum) {
            paths.push([node.val]);
        } else {
            paths[levelNum].push(node.val)
        }

        if (node.left) queue.push({ node: node.left, levelNum: levelNum + 1 })
        if (node.right) queue.push({ node: node.right, levelNum: levelNum + 1 })
    }

    for ( let arr of paths ){
        let len = arr.length;
        let sum = arr.reduce((a, b) => a + b, 0);
        avaregeArr.push(sum / (len * 1.0))
    }

    return avaregeArr;
};

console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ] 