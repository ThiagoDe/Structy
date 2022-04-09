const { print } = require('./printList');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
    let head = new Node(values[0]);
    let current = head // h , e ,
    let next
    let arr = values.slice(1, values.length);
    // console.log(arr)
    for (let i = 0; i < arr.length; i++){ // e 
        let val = arr[i]
        console.log(val)
        current.next = new Node(val);
        current = current.next;
    }

    return head;
};

const createLinkedList2 = (values) => {
    // let dummyHead = new Node(null);
    // let current = dummyHead;
    // for (let val of values){
    //     current.next = new Node(val)
    //     current = current.next;
    // }

    // return dummyHead.next;
}
const createLinkedList3 = (values, i = 0) => {
    if (i === values.length) return null;
    const head = new Node(values[i]);
    head.next = createLinkedList3(values, i+1);
    return head;
}

print(createLinkedList3(["h", "e", "y"]))
// h -> e -> y)