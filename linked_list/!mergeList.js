class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28
// 6 -> 8 -> 9 -> 25


const mergeLists = (head1, head2) => {
  let dummyHead = new Node(null) //
  let tail = dummyHead // null tail.next = 5 , 6

  let current1 = head1 // 5 - 7
  let current2 = head2 // 6 - 8

    while (current1 && current2){
        if(current1.val < current2.val) {
            tail.next = current1 //
            current1 = current1.next  // 7 
        } else {
            tail.next = current2
            current2 = current2.next
        }
        tail = tail.next // tail = 5, 6
    }
    if (current1 === null) tail.next = current2
    if (current2 === null) tail.next = current1
    return dummyHead.next 
};


// recursive
const mergeLists = (head1, head2) => {
    // if(head1 === null && head2 === null ) return null
    // if(head1) return head2
    // if (head2) return head1 

}

console.log(mergeLists(a, q));
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 