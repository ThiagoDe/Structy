class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const r_createLinkedList = (values, i = 0) => {
  if ( i === values.length) return null;
  let node = new Node(values[i]);
  node.next = createLinkedList(values, i + 1)
  return node;
};

const createLinkedList = (values) => {
  let head = new Node(null);
  let current = head;
  
    for (let value of values){
      current.next = new Node(value);
      current = current.next;
    }
  
  return head.next;
};

