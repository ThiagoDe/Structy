const insertNode = (head, value, index) => {
  if (index === 0){
    let newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  let current = head;
  let count = 0;
  
  while (current){
    if (count === index - 1){
      const next = current.next;
      current.next = new Node(value);
      current.next.next = next;
    }
    count += 1;
    current = current.next;
  }
  
  return head;
};

const r_insertNode = (head, value, index, count = 0) => {
  if (index === 0) {
    let newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  
  if (count === index  - 1){
    let next = head.next;
    head.next = new Node(value);
    head.next.next = next;
    return head;
  }
  insertNode(head.next, value, index, count + 1 )
  return head;
};