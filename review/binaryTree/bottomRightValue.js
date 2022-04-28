const bottomRightValue = (root) => {
    const queue = [root];

    while (queue.length > 0){
        const current = queue.shift();

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);

        if (queue.length === 0) return current.val;
    }
}

const _bottomRightValue = (root) => {
  const queue = [root];
  
  let current = null;
  while (queue.length > 0){
    current = queue.shift();
    
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return current.val;
};