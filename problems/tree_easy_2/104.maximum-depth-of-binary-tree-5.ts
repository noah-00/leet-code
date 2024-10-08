/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
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

import { TreeNode } from "../Tree";

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  const lDepth = maxDepth(root.left);
  const rDepth = maxDepth(root.right);
  return lDepth > rDepth ? lDepth + 1 : rDepth + 1;
}
// @lc code=end
