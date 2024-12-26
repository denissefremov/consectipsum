let parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);

function constructBinaryTree(parent) {
  let n = parent.length;
  let treeNodes = new Array(n);

  for (let i = 0; i < n; i++) {
    treeNodes[i] = { value: i, left: null, right: null };
  }

  let root = null;

  for (let i = 0; i < n; i++) {
    if (parent[i] === -1) {
      root = treeNodes[i];
    } else if (treeNodes[parent[i]].left === null) {
      treeNodes[parent[i]].left = treeNodes[i];
    } else {
      treeNodes[parent[i]].right = treeNodes[i];
    }
  }

  return root;
}

let binaryTree = constructBinaryTree(parent);
