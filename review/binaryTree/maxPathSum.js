const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (!root.right && !root.left ) return root.val;
  return root.val + Math.max( maxPathSum(root.left), maxPathSum(root.right)); 
};