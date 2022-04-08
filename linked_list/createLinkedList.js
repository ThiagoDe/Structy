const { print } = require('../printList');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
    let head = new Node(values[0]);
    let current = head 
    let arr = values.slice(1, values.length);
    // let next = new Node(arr[0]);
    for (val of arr){
        current.next = val;
        current = val;
    }
    return head;
};

print(createLinkedList(["h", "e", "y"]))
// h -> e -> y)