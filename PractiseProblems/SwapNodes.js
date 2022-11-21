'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

//Node
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = new Node(1);
    }
    
    
    create(indexPair) {
        //indexpair = [[2,3], [4,5], ..]
        /* 
            Creating queue using array.
            It will be O(n) timecomplexity for remove first item from array. 
            Can use linked list for O(1) for enqueue & dequeue. but for 
            simplicity, array is used below.
        */
        let q = []; 
        q.push(this.root);
        //Loop the indices
        for(let index of indexPair) {
            let deQueuedNode = q.shift();
            //Check index value is exists or not, incase of wrong data.
            if(index[0] && index[0] !== -1) {
                deQueuedNode.left = new Node(index[0]); 
                q.push(deQueuedNode.left);
            }
            if(index[1] && index[1] !== -1) {
                deQueuedNode.right = new Node(index[1]); 
                q.push(deQueuedNode.right);
            }
        }
        return this.root;
    }
    
    //Inorder - Left -> Root -> Right
    inOrderTraverse(queries) {
        let resultArray = [];
        let count;let resultQ;let q;
        let stopCount = false;
        for(let query of queries) {
            count = 1;
            resultQ = [];
            q=query;            
            traverse(this.root,1);
            resultArray.push(resultQ);
            return;
        }
        
        //helpler method
        function traverse(current,count) {
            //Base case.
            if(!current) return;
            //check the query.
            let mod =  count % q; 
            //Swap
            if(mod === 0) {
                console.log(count,q);
                console.log(current);
                let temp = current.left;
                current.left = current.right;
                current.right = temp;
                console.log(current);
            }
            if(!current.left && !current.right) {
                return;
            }
            // count++;
            traverse(current.left,count+1);
            //Pushing the value into result arry for printing.
            resultQ.push(current.val);
            // count++;
            traverse(current.right,count+1);
            // count=2;
        }
        return resultArray;
    }
    
}

/*
 * Complete the 'swapNodes' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY indexes
 *  2. INTEGER_ARRAY queries
 */

function swapNodes(indexes, queries) {
    // Write your code here
    let bt = new BinaryTree();
    bt.create(indexes);
    //Traverse.
    let result = bt.inOrderTraverse(queries);
    //Printing 
    for(let p of result) {
        console.log(p.join(" "));
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let indexes = Array(n);

    for (let i = 0; i < n; i++) {
        indexes[i] = readLine().replace(/\s+$/g, '').split(' ').map(indexesTemp => parseInt(indexesTemp, 10));
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = parseInt(readLine().trim(), 10);
        queries.push(queriesItem);
    }

    const result = swapNodes(indexes, queries);

    ws.write(result.map(x => x.join(' ')).join('\n') + '\n');

    ws.end();
}
