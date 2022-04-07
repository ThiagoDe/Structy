class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const longestStreak = (head) => {
    let maxStreak = 0;
    let currentStreack = 0;
    let currentNode = head;
    let prevVal = null; 

    while (currentNode) {
        if (currentNode.val == prevVal){
            currentStreack += 1;
        } else {
            currentStreack = 1 
        }

        if (currentStreack > maxStreak) {
            maxStreak = currentStreack
        }
        
        prevVal = currentNode.val;
        currentNode = currentNode.next;
    }
    
    return maxStreak
};
// 5 -> 5 -> 7 -> 7 -> 7 -> 6

console.log(longestStreak(a)); // 3