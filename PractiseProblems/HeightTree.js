
//HackerRank - https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem

/*
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function treeHeight(root) {
    const n = _stdin.split('\n')[0];
    const m = _stdin.split('\n')[1].split(' ');
    const tree = new Tree();
    for (let i = 0; i < n; i++) {
        tree.root = tree.insert(tree.root, parseInt(m[i]));
    }
    
    // console.log(tree.root);
    
    const newRoot = tree.root;
    
	//Add root as array in to the queue
    let queue = [];
    queue.push([newRoot]);
    //Height - root node is at height 0.
    let height = -1;
    //At each level add all the nodes into the array and push this into the queue.
    //While loop -> if queue is not empty.
    while(queue.length > 0) {
        //Dequeue the nodes array. Remove the first item.
        let deQueuedNode = queue.shift();
        
        //Loop over this deQueuedNode array.
        let nodeArray = [];
        for(let node of deQueuedNode) {
            if(node.left) nodeArray.push(node.left);
            if(node.right) nodeArray.push(node.right);
        }
        if(nodeArray.length > 0) queue.push(nodeArray); 
        height++;
    }
    let returnH = (height == -1) ? 0 : height;
    return (returnH).toString();
}

