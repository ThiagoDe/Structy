const levelAverages = (root) => {
  if (!root) return [];
  const queue = [{node: root, level: 0}]
  const levels = [];
  
  while (queue.length > 0) {
    let { node, level } = queue.shift();
    
    if (levels.length === level){
      levels[level] = [node.val]
    } else {
      levels[level].push(node.val)
    }
    
    if (node.left) queue.push({node: node.left, level: level + 1});
    if (node.right) queue.push({node: node.right, level: level + 1});
    
  }
  let averages = [];
  for (let subAv of levels){
    let av = subAv.reduce((a, b) => a + b, 0) / subAv.length 
    averages.push(av);
  }
  return averages;
};




const _levelAverages = (root) => {
  const levels = [];
  fillLevels(root, levels, 0);
  
  const avgs = [];
  for (let level of levels) {
    avgs.push(avg(level));
  }
  return avgs;
};

const fillLevels = (root, levels, levelNum) => {
  if (root === null) return;

  if (levels.length === levelNum) {
    levels[levelNum] = [root.val];
  } else {
    levels[levelNum].push(root.val);
  }

  fillLevels(root.left, levels, levelNum + 1);
  fillLevels(root.right, levels, levelNum + 1);
};

const avg = (array) => {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum / array.length;
};