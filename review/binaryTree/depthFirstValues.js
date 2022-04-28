const depthFirstValues = (root) => {
  if (root === null) return [];
  if (root.left === null && root.right === null) return [root.val]
  return [root.val, ...depthFirstValues(root.left), ...depthFirstValues(root.right)]
};

const _depthFirstValues = (root) => {
  if (root === null)
    return [];

  const values = [];
  const stack = [ root ];

  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.val);
    
    if (node.right !== null)
      stack.push(node.right);
    
    if (node.left !== null)
      stack.push(node.left);
  }

  return values;
};