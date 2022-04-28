const _pathFinder = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [ root.val ]
  let leftPath = pathFinder(root.left, target);
  if (leftPath) return [root.val,...leftPath]
  
  let rightPath = pathFinder(root.right, target);
  if (rightPath) return [root.val, ...rightPath];
  return null;
};


const pathFinder = (root, target) => {
  const result = pathFinderHelper(root, target);
  if (result === null) {
    return null;
  } else {
    return result.reverse();
  }
};

const pathFinderHelper = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [ root.val ];
  
  const leftPath = pathFinderHelper(root.left, target);
  if (leftPath !== null) {
    leftPath.push(root.val);
    return leftPath;
  }
  
  const rightPath = pathFinderHelper(root.right, target);
  if (rightPath !== null) {
    rightPath.push(root.val);
    return rightPath;
  }
  
  return null;
};