/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // if both p and q are null, they are same
    if (!p && !q) return true;
    // if only one of p or q is null, they are not the same
    if (!p || !q) return false;
    // if p and q's root don't match, they are not the same
    if (p.val !== q.val) return false;

    return isSameTree(p?.left, q?.left) && isSameTree(p?.right, q?.right);
};