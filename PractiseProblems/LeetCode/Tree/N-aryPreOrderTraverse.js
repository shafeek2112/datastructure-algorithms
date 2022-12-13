/* 
N-ary Tree Preorder Traversal
Easy
2.5K
120
company
Google
company
Microsoft
company
Bloomberg
Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

 

Example 1:



Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]
Example 2:



Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
0 <= Node.val <= 104
The height of the n-ary tree is less than or equal to 1000.
 

Follow up: Recursive solution is trivial, could you do it iteratively?
*/

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if(!root) return [];
    let result = [];
    let stack = [];
    stack.push(root);
    let deQueued;
    //Loop
    while(stack.length > 0) {
        deQueued = stack.pop();
        if(!deQueued) continue;
        //Add the value in to result.
        result.push(deQueued.val);
        let dLen = deQueued.children.length;
        for(let i = dLen-1; i >= 0; i--) {
            let child = deQueued.children[i];
            stack.push(child);
        }
    }
    return result;
};