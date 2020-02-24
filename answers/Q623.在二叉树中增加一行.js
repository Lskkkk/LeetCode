/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
const addOneRow = function (root, v, d) {
    if (d === 1) {
        const newRoot = new TreeNode(v);
        newRoot.left = root;
        return newRoot;
    }
    dfs(root, v, d, 1);
    return root;
};

const dfs = (node, v, d, k) => {
    if (k + 1 === d) {
        const left = new TreeNode(v);
        const right = new TreeNode(v);
        left.left = node.left;
        right.right = node.right;
        node.left = left;
        node.right = right;
    } else if (k + 1 < d) {
        node.left && dfs(node.left, v, d, k + 1);
        node.right && dfs(node.right, v, d, k + 1);
    }
};

test('--', () => {});