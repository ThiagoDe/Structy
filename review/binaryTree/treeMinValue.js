const treeMinValue = (root) => {
 
  let min = root.val;
  
  let queue = [root];
  
  while (queue.length > 0){
    const node = queue.shift();
    min = Math.min(min, node.val);
    
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return min;
};

const _treeMinValue = (root) => {
  if (root === null) return Infinity;
  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
};