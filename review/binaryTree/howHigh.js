const howHigh = (node, l = 0) => {
  if (node === null && l === 0) return - 1;
  if (node === null) return 0;
  if (node.left === null && node.right === null) return l;
  return Math.max(howHigh(node.left, l + 1), howHigh(node.right, l + 1));
};

const _howHigh = (node) => {
  if (node === null) return -1;

  const leftHeight = howHigh(node.left);
  const rightHeight = howHigh(node.right);
  return 1 + Math.max(leftHeight, rightHeight);
};
