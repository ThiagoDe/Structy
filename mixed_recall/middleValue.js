class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const middleValue = (head) => {
  const values = [];
  let current = head;

  while (current){
      values.push(current.val);
      current = current.next;
  }

  const mid = Math.floor(values.length / 2);
  console.log(mid)
  return values[mid];
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;


// a -> b -> c -> d -> e -> f
console.log(middleValue(a)); // d