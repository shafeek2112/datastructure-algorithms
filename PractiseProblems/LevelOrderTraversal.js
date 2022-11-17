//HackerRank - https://www.hackerrank.com/challenges/tree-level-order-traversal/problem

process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
});

function levelOrder(root) {
    //Order of visiting node is Root->Left->Right, so use the queue for levelOrder 
    //We can also use the linked list instead of arry for queue, so the adding(enqueue)
    // and the removing(dequeue) will be constant time - O(1);
    const queue = [];
    //Push the root into the queue
    queue.push(root);
    let output='';
    //while loop -> condition => queue should not be empty.
    while(queue.length > 0) {
        //Dequeue using pop().
        // shit method in array is O(n). to avoid this can use the linked list
        let deQueued = queue.shift(); 
        //print the node data.
        output += `${(deQueued.data).toString()} `;
        //Push the left & right child into the queue if any for next iteration.
        if(deQueued.left) queue.push(deQueued.left);
        if(deQueued.right) queue.push(deQueued.right);
    }//end while.
    console.log(output);
}

