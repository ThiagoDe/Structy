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

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d


const linkedListValues = (head) => {
    let arr = [];
    let current = head;
    while (current){
        arr.push(current.val);
        current = current.next;
    }
        
    return arr;
};
console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]