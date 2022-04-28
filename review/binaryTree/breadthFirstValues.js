const breadthFirstValues = (root) => {
  if (root === null) return [];
  let values = [];
  let queue = [root]
  
  
  while (queue.length > 0){
    const node = queue.shift();
    values.push(node.val);
    
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return values;
};