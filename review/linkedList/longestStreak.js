const longestStreak = (head) => {
  let maxStreak = 0;
  let currentStreak = 0;
  let currentNode = head;
  let prevVal = null;
  
  while (currentNode){
    if (currentNode.val === prevVal){
      currentStreak += 1;
    } else {
      currentStreak = 1;
    }
    maxStreak = Math.max(currentStreak, maxStreak);
    
    prevVal = currentNode.val;
    currentNode = currentNode.next;
  }
  return maxStreak;
};
