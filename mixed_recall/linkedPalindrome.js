class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const a = new Node(3);
const b = new Node(2);
const c = new Node(4);

a.next = b;
b.next = c;

// const a = new Node(3);
// const b = new Node(2);
// const c = new Node(7);
// const d = new Node(7);
// const e = new Node(2);
// const f = new Node(3);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

const linkedPalindrome = (head) => {
    let current = head;
    let possiblePal = [];

    while (current){
        possiblePal.push(current.val)
        current = current.next;
    }
    console.log(possiblePal);
    console.log(possiblePal.reverse());
    return possiblePal.join('') === possiblePal.reverse().join('');
};


// 3 -> 2 -> 7 -> 7 -> 2 -> 3
console.log(linkedPalindrome(a)); // true