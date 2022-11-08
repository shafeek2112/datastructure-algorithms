/***************** Binary Heaps *************************
*   Very similar to a binary search tree, but with some different rules! 
*   In a MaxBinaryHeap, parent nodes are always larger than child nodes. 
*   In a MinBinaryHeap, parent nodes are always smaller than child nodes
*    - Each parent has at most two child nodes
*    - The value of each parent node is always greater than its child nodes
*    - In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
*    - A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first
*    
* 
*/

class MaxBinaryHeap {

    constructor() {
        this.heap = [];
    }

    insertHeap(val) {
        //Insert into the array
        this.heap.push(val);
        //Bubble up the value.
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while(index > 0) {
            //Find the parent.
            let val = this.heap[index];
            let indexParent = Math.floor((index-1)/2);
            //If the parent is greater than the child then stop.
            if(this.heap[indexParent] >= val) break;
            //Else swap.
            this.heap[index] = this.heap[indexParent];
            this.heap[indexParent] = val;
            //For next iteration.
            index = indexParent;
        }
    }
}