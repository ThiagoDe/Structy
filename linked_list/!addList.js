const { print } = require('../printList');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3


// const addLists = (head1, head2, carry = 0) => {
//     if (head1 === null && head2 === null && carry === 1) return null 
//     const val1 = head1 === null ? 0 : head1.val;
//     const val2 = head2 === null ? 0 : head2.val;

//     const sum = val1 + val2 + carry;
//     const nextCarry = sum > 9 ? 1 : 0 
//     const digit = sum % 10;

//     const resultNode = new Node(digit);

//     const next1 = head1 === null ? null : head1.next;
//     const next2 = head2 === null ? null : head2.next;
//     resultNode.next = addLists(next1, next2, nextCarry)

//     return resultNode;
// };

const addLists = (head1, head2) => {
    const dummyHead = new Node(null)
    let tail = dummyHead;
    let carry = 0;
    let current1 = head1;
    let current2 = head2;

    while (current1 || current2 || carry ) {
        const val1 = current1 === null ? 0 : current1.val;
        const val2 = current2 === null ? 0 : current2.val;
        const sum = val1 + val2 + carry;
        carry = sum > 9 ? 1 : 0 
        const digit = sum % 10;

        if (current1 !== null) current1 = current1.next;
        if (current2 !== null) current2 = current2.next;

        tail.next = new Node(digit);
        tail = tail.next;
    }

    return dummyHead.next;
}

print(addLists(a1, b1));
// 3 -> 7 -> 5 -> 7