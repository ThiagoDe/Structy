const { print } = require("./printList");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

// a -> b -> c -> d

const insertNode = (head, value, index) => {
    let newNode = new Node(value);
    let count = 0;
    let current = head;
    let next = current.next;

    if (index === 0){
        newNode.next = head 
        return newNode
    }

    while (current) {
        if (count === index - 1){
            next = current.next; 
            current.next = newNode;
            newNode.next = next;
            break 
        }
        count += 1;
        current = current.next; 
    }


    return head;
};


print(insertNode(a, 'x', 0)); // a -> b -> x -> c -> d