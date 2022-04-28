const treeValueCount = (root, target) => {
  if (root === null) return 0;
  const match = root.val === target ? 1 : 0;
  return match + treeValueCount(root.left, target) + treeValueCount(root.right, target);
};

const _treeValueCount = (root, target) => {
  if (root === null) return 0;
  
  let count = 0;
  const queue = [ root ];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === target) count += 1;
    
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  
  return count;
};