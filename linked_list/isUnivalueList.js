class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const isUnivalueList = (head) => {
  let value = head.val // 7
  let current = head  // a b 

  while (current !== null){ 
    if(current.val !== value) return false // 7 !== 7 
    current = current.next 
  }
  return true 
};

const isUnivalueList = (head, prevVal = null) => {
    if (head === null) return true;

    if (prevVal !== null && head.val !== prevVal)return false
    return isUnivalueList(head.next, head.val)
}

const a = new Node(7);
const b = new Node(7);
const c = new Node(4);

a.next = b;
b.next = c;

// 7 -> 7 -> 4

console.log(isUnivalueList(a)); // false 