class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListFind = (head, target) => {
  // todo
    let current = head 
    while(current){
        if (current.val === target) return true 
        current = current.next 
    }
    return false 
};

const linkedListFind = (head, target) => {
    if (!head) return false
    if (head.val === target) return true 
    return linkedListFind(head.next, target)
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListFind(a, "c")); // true