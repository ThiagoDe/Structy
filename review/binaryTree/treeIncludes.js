const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
  
};

const _treeIncludes = (root, target) => {
  if (root === null) return false;

  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node.val === target) return true;
    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }

  return false;
};