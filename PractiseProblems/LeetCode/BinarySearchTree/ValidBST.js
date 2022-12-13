/* 
Validate Binary Search Tree
Medium
13.3K
1.1K
company
Amazon
company
Bloomberg
company
Apple
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left 
subtree
 of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:


Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

    //-------- Approach 1 (PreOrder / Top-Down) Recursive -----------------
    /*if(!root) return false;
    function valid(current,lowerLimit,upperLimit) {
        if(!current) return true;
        let val = current.val;
        if(val >= upperLimit || val <= lowerLimit) return false;
        let result = valid(current.left, lowerLimit, val);
        let result1 = valid(current.right, val, upperLimit);
        return result && result1;
    }
    return valid(root,-Infinity,Infinity);
    //Time Complexity = O(n) -> as we visiting all the nodes.
    //Space Complexity = O(n) -> as recurrsion is wait in the stack.
    */

    //-------- Approach 2 (PreOrder / Top-Down) Iterative (Stack) -----------------
    /*if(!root) return false;
    let current = {
        node : root,
        lowerLimit : -Infinity,
        upperLimit : Infinity
    };
    let stack = [];
    stack.push(current);
    let nodeObj;
    while(stack.length > 0) {
        nodeObj = stack.pop();
        let { node, upperLimit, lowerLimit } = nodeObj;
        if(node.val >= upperLimit || node.val <= lowerLimit) return false;
        if(node.right) {
            current = {
                node : node.right,
                lowerLimit : node.val,
                upperLimit : upperLimit
            }
            stack.push(current);
        }
        if(node.left) {
            current = {
                node : node.left,
                lowerLimit : lowerLimit,
                upperLimit : node.val
            }
            stack.push(current);
        }
    }
    return true;
    //Time Complexity = O(n) -> as we visiting all the nodes.
    //Space Complexity = O(n) -> as we adding left & right nodes in the stack on each loop.
    */

    //-------- Approach 3 (InOrder / Bottom-Up) -----------------
    //If the tree is valid BST, then InOrder search will always gives increasing order. 
    //Track the prev value and compare it with the current one. If current is lesser/equal
    //to prev, its not valid BST.
    if(!root) return false;
    function traverse(current) {
        //Base case.
        if(!current) return true;
        //Left
        let result1 = traverse(current.left);
        console.log(prev,current.val);
        //Validate.
        if(prev !== null && current.val <= prev) return false;
        //Update the prev for next loop.
        prev = current.val;
        //Right
        let result2 = traverse(current.right);
        return result1 && result2;
    }
    prev = null;
    return traverse(root);
    //Time Complexity = O(n) -> as we visiting all the nodes.
    //Space Complexity = O(n) -> Recurrsion is waiting in the stack.
};




