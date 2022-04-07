class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getNodeValue = (head, index) => {
  
  let count = 0
  let current = head 
  while (count <= index){
      if (count === index) return current.val 
      if (!current.next) return null 
      current = current.next 
      count += 1 
  }
  return null
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(getNodeValue(a, 2)); // 'c'