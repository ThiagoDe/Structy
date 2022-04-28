const leafList = (root) => {
  if (root === null) return [];
  if (root.left === null && root.right === null) return [root.val];
  return [...leafList(root.left), ...leafList(root.right) ]
};

const i_leafList = (root) => {
  if (root === null) return [];
  const leaves = [];
  const stack = [ root ];
  while (stack.length) {
    const current = stack.pop();
    if (current.left === null && current.right === null) leaves.push(current.val);
    
    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }
  return leaves;
};