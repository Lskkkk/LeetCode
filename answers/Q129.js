/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let valueList = [];
let currentFarther = '';

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    valueList = [];
    currentFarther = '';
    deepSearch(root);
    // return valueList.reduce((cv, pv) => cv += pv, '')
    return valueList.reduce((cv, pv) => cv += parseInt(pv), 0);
};

const deepSearch = (root) => {
    if (root === null) return;
    if (root.left === null && root.right === null) {
        valueList.push(`${currentFarther}${root.val}`);
        return;
    }
    currentFarther = `${currentFarther}${root.val}`;
    deepSearch(root.left);
    deepSearch(root.right);
    currentFarther = currentFarther.slice(0, currentFarther.length - 1);
};

test('--', () => {});