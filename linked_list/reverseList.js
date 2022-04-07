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

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

const reverseList = (head, prev = null) => {
    // todo
    // let prev = null;
    // let current = head; // a
    
    // while (current) {
    //     let next = current.next // b 
    //     current.next = prev; // null
    //     prev = current; //
    //     current = next; 
    // }
    // return prev 
    if (head === null) return prev;
    const next = head.next;
    head.next = prev; 
    return reverseList(next, head)
};

console.log(reverseList(a)); // f -> e -> d -> c -> b -> a