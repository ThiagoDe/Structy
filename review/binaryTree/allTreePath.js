const allTreePath = (root) => {
    if (!root) return [];
    if (!root.left && !root.right) return [[root.val]];

    const paths = []
    const leftPaths = allTreePath(root.left);
    const rightPaths = allTreePath(root.right);

    for (let subPath of leftPaths){
        paths.push([root.val, ...subPath])
    }

    for (let subPath of rightPaths){
        paths.push([root.val, ...subPath])
    }
    return paths;
}