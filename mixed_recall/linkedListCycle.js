class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListCycle = (head) => {
    // let nodes = new Set();
    // let current = head;
    // while (current){
    //     console.log(nodes);
    //     console.log(current.val);
    //     if (nodes.has(current.val)) {
    //         return true;
    //     } else {
    //     nodes.add(current.val)
    //     current = current.next;
    //     }
    // }
    // return false;
    let slow = head;
    let fast = head;
    let fistIteration = true;

    while (fast !== null && fast.next !== null){
        if (fast === slow && !fistIteration) return true;
        fast = fast.next.next;
        slow = slow.next;
        fistIteration = false;
    }

    return false;
};


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d 

//         _______
//       /        \
// a -> b -> c -> d 

console.log(linkedListCycle(a));  // true