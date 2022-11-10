/***************** PriorityQueue *************************
*   This is a abstract method by using the MinBinaryHeap to implement.
*   A data structure where each element has a priority. 
*   Elements with higher priorities are served before elements with lower priorities.
*    - Write a Min Binary Heap - lower number means higher priority.
*    - Each Node has a val and a priority.  Use the priority to build the heap.
*    - Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
*    - Dequeue method removes root element, returns it, and rearranges heap using priority.
* 
*/

class Node {
    constructor(val,priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    
    enQueue(val,priority) {
        //Create a node.
        let newNode = new Node(val,priority);
        //Similar to the MinBinaryHeap, push it to the end and bubble up.
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.values.length-1;
        while(index > 0) {
            let currentNode = this.values[index];
            //Compare it with paren. MinBinaryHeap to get the parent, (n-1)/2.
            let parentIndex = Math.floor((index-1)/2);
            let parentNode = this.values[parentIndex];
            //-----This is MinBinaryHeap -> lower priority number means its a highest priority. So lower should be the parent.
            //-- For instance, priority = 1 is higher priority than 2,3,...
            if(currentNode.priority >= parentNode.priority) break;
            //Else Swap
            if(currentNode.priority < parentNode.priority) {
                this.values[index] = this.values[parentIndex];
                this.values[parentIndex] = currentNode;
                //For next iteration.
                index = parentIndex;
            }
        }
    }

    deQueue() {
        //Remove the root node. Root is always the highest priority.
        
        //xxxxxxx-------- Should not use the shift, it will change the index of all the subsequent element. so O(n)
        // let removedNode = this.values.shift();
        let removedNode = this.values[0];

        //Move the last node to the root and bubble down if necessary.
        let newRoot = this.values.pop();
        
        //xxxxxxx-------- Should not use the unshift,  it will change the index of all the subsequent element. O(n)
        // this.values.unshift(newRoot);
        this.values[0] = newRoot;
        
        //Bubble down.
        this.sinkDown();
        return removedNode;
    }
    sinkDown() {
        let index = 0; //start from 0
        while(index < (this.values.length-1)) {
            let currentNode = this.values[index];
            //---This is MinBinaryHeap. To get the child -> (2n+1), (2n+2)
            let leftChildIndex = (2*index) + 1;
            let rightChildIndex = (2*index) + 2;
            //Before get the child, hsould check index is inbound/outbound. Meaning children indexes are exists
            let leftChild = (this.values[leftChildIndex]) ? this.values[leftChildIndex] : null;
            let rightChild = (this.values[rightChildIndex]) ? this.values[rightChildIndex] : null;
            //Comapre the priority
            if((!leftChild || currentNode.priority < leftChild.priority) && (!rightChild || currentNode.priority < rightChild.priority)) break; 
            
            //If left has highest priority then swap.
            if(leftChild && (leftChild.priority < currentNode.priority) && (!rightChild || leftChild.priority < rightChild.priority)) {
                this.values[index] = leftChild;
                this.values[leftChildIndex] = currentNode;
                //Set next iteration index.
                index = leftChildIndex;
            }
            //Right swap
            else {
                this.values[index] = rightChild;
                this.values[rightChildIndex] = currentNode;
                //Set next iteration index.
                index = rightChildIndex;
            }
        }
    }
}

let pq = new PriorityQueue();
pq.enQueue("Cold", 5);
pq.enQueue("Fracture", 3);
pq.enQueue("Fever", 4);
pq.enQueue("BrokenHead", 2);
pq.enQueue("Gunshot", 1);