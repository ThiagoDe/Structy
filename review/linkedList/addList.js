class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addLists = (head1, head2, carry = 0) => {
    if (head1 === null && head2 === null && carry === 0) return null;
    let val1 = head1 === null ? 0 : head1.val;
    let val2 = head2 === null ? 0 : head2.val;

    const sum = val1 + val2 + carry;
    let nextCarry = sum > 9 ? 1 : 0;
    let digit = sum % 10;

    const resultNode = new Node(digit);

    let next1 = head1.next === null ? null : head1.next;
    let next2 = head2.next === null ? null : head2.next;
    resultNode.next = addLists(next1, next2, nextCarry);

    return resultNode
};

const _addLists = (head1, head2) => {
  const dummyHead = new Node(null);
  let tail = dummyHead;
  let carry = 0;
  let current1 = head1;
  let current2 = head2;
  
  while (current1 || current2 || carry === 1){
    let val1 = !current1 ? null : current1.val;
    let val2 = !current2 ? null : current2.val;
    let sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;
    let digit = sum % 10;
    
    if (current1) current1 = current1.next;
    if (current2) current2 = current2.next;
    
    tail.next = new Node(digit);
    tail = tail.next;
  }
 return dummyHead.next;
};