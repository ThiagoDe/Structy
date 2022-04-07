class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListValues = (head) => {
  // todo
  let list = [];
  let current = head 
  while (current !== null) { 
    list.push(current.val)
    current = current.next 
  }
  return list 
  
};

// <--/ recursion /--> 


const linkedListValues = (head) => {
    const values = []
    fillValues(head, values)
    return values 
  
};

const fillValues = (head, values) => {
    if (head === null) return 
    values.push(head.val)
    fillValues(head.next, values)
}