/***************** Binary Search Tree *************************
*   A data structure that consists of nodes in a parent / child relationship. 
*    Every parent node has at most two children
*    Every node to the left of a parent node is always less than the parent
*    Every node to the right of a parent node is always greater than the parent
*       Tree Terminology:
*       -	Root - The top node in a tree.
*       -	Child -A node directly connected to another node when moving away from the Root.
*       -	Parent - The converse notion of a child.
*       -	Siblings -A group of nodes with the same parent.
*       -	Leaf - A node with no children.
*       -	Edge - The connection between one node and another.
* 
*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    /*
    *   Insert a node.
    *   -	Create a new node
    *   -	Starting at the root
    *       -	Check if there is a root, if not - the root now becomes that new node!
    *       -	If there is a root, check if the value of the new node is greater than or less than the value of the root
    *       -	If it is greater 
    *           o	Check to see if there is a node to the right
    *               	If there is, move to that node and repeat these steps
    *               	If there is not, add that node as the right property
    *       -	If it is less
    *           o	Check to see if there is a node to the left
    *               	If there is, move to that node and repeat these steps
    *               	If there is not, add that node as the left property
    *
    */
    insert(val) {
        let newNode = new Node(val);
        //Check the root 
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(current) {
            //If equal - then return undefined Or - include the one more property called this.frequency to just
            //increment it to track how many duplicates. 
            if(current.val === val) return undefined;

            //if current is greater
            if(current.val > val) {
                if(!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            else {
                if(!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    /*
    *    Find a item
    *    -	Starting at the root
    *        -	Check if there is a root, if not - we're done searching!
    *        -	If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
    *        -	If not, check to see if the value is greater than or less than the value of the root
    *        -	If it is greater 
    *            o	Check to see if there is a node to the right
    *            o	If there is, move to that node and repeat these steps
    *            o	If there is not, we're done searching!
    *        -	If it is less
    *            o	Check to see if there is a node to the left
    *            o	If there is, move to that node and repeat these steps
    *            o	If there is not, we're done searching!
    */
    find(val) {
        if(!this.root) return undefined;
        let current = this.root;
        while(current) {
            if(current.val === val) {
                return current;
            }
            if(current.val > val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return undefined;
    }

    /* 
    *   Breath-First Search. Traversing a tree horizontally.
    *        -	Create a queue (this can be an array) and a variable to store the values of nodes visited
    *        -	Place the root node in the queue
    *        -	Loop as long as there is anything in the queue
    *            -	Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    *            -	If there is a left property on the node dequeued - add it to the queue
    *            -	If there is a right property on the node dequeued - add it to the queue
    *        -	Return the variable that stores the values
    */
    BFS() {
        if(!this.root) return [];

        let data = [], queue = [];
        //Push the root.
        queue.push(this.root);
        //Loop
        while(queue.length > 0) {
            //Dequeue and check the childrens.
            let dequeuedNode = queue.shift();
            //Add it in the data
            data.push(dequeuedNode.val);
            //Get the childers and stored in the queue for next iteration.
            if(dequeuedNode.left) queue.push(dequeuedNode.left)
            if(dequeuedNode.right) queue.push(dequeuedNode.right)
        }
        return data;
    }

    /*
    *   DFS-PreOrder - Order is Root —> Left —> Right. Add the node value into array whenever visit the node. 
    *   
    *    - Create a variable to store the values of nodes visited
    *    - Store the root of the BST in a variable called current
    *    - Write a helper function which accepts a node
    *       - Push the value of the node to the variable that stores the values
    *       - If the node has a left property, call the helper function with the left property on the node
    *       - If the node has a right property, call the helper function with the right property on the node
    *    - Invoke the helper function with the current variable
    *    - Return the array of values
    */
    DFSPreOrder() {
        if(!this.root) return [];
        let data = [];
        //Helper function.
        function traverse(node) {
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        //Invoke the helper
        traverse(this.root);
        return data;
    }

    /*
    *    DFS - Postorder - Order is Left —> Right —> Root. Add the node value after visited all the node.
    *    -	Create a variable to store the values of nodes visited
    *    -	Store the root of the BST in a variable called current
    *    -	Write a helper function which accepts a node
    *        o	If the node has a left property, call the helper function with the left property on the node
    *        o	If the node has a right property, call the helper function with the right property on the node
    *        o	Push the value of the node to the variable that stores the values
    *        o	Invoke the helper function with the current variable
    *    -	Return the array of values
    */
    DFSPostOrder() {
        if(!this.root) return [];
        let data = [];
        //Helper function
        function traverse(node) {
            //left
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        //Invoke the helper.
        traverse(this.root);
        return data;
    }

    /*
    *   DFSInOrder - Order is Left —> Root —> Right. 
    *    -	Create a variable to store the values of nodes visited
    *    -	Store the root of the BST in a variable called current
    *    -	Write a helper function which accepts a node
    *        o	If the node has a left property, call the helper function with the left property on the node
    *        o	Push the value of the node to the variable that stores the values
    *        o	If the node has a right property, call the helper function with the right property on the node
    *    -	Invoke the helper function with the current variable
    *    -	Return the array of values
*
    */
    DFSInOrder() {
        if(!this.root) return [];
        let data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    

}

let bst = new BST();
bst.insert(10);
bst.insert(4);
bst.insert(9);
bst.insert(14);
bst.insert(11);
bst.insert(7);
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(20);
bst.insert(19);
bst.insert(90);