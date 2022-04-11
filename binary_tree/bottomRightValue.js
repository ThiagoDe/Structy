const { Node } = require('./nodeClass');

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(-4);
const f = new Node(-13);
const g = new Node(-2);
const h = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     / \       
//    -2  6


const bottomRightValue = (root) => {
    let queue = [ root ];
    let rightBottom = root.val 

    while (queue.length > 0) {
        rightBottom = queue[queue.length - 1].val
        let current =  queue.shift();

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
        
       
        // console.log(queue[queue.length - 1].val)
    }
    return rightBottom;
};

console.log(bottomRightValue(a)); // -> 6
