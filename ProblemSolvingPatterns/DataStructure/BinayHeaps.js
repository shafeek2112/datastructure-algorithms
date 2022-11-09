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

    /* 
    *   First add the node into the end and bubble up if necessary.
    *       -   Push the value into the values property on the heap
    *        -	Bubble Up:
    *        -	Create a variable called index which is the length of the values property - 1
    *        -	Create a variable called parentIndex which is the floor of (index-1)/2
    *        -	Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    *        o	Swap the value of the values element at the parentIndex with the value of the element property at the child index
    *        o	Set the index to be the parentIndex, and start over!
    */
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

    /* 
    *   Remove the root and replace the last element. Bubble down/Sink down the first element and swap.
    *   Remove the root, 
    *   Replace with the most recently added, 
    *   Adjust (sink down)
    *       - Swap the first value in the values property with the last one
    *        - Pop from the values property, so you can return the value at the end.
    *        - Have the new root "sink down" to the correct spot...​
    *            - Your parent index starts at 0 (the root)
    *            - Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
    *            - Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
    *            - If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
    *            - The child index you swapped to now becomes the new parent index.  
    *            - Keep looping and swapping until neither child is larger than the element.
    *            - Return the old root!
    */
    extractMax() {
        //Extract the root.
        let removedRoot = this.heap.shift();
        //If the array consists of 1 or 2 items only, then return here.
        // if(this.heap.length < 2 ) return;

        //Get Last item.
        let lastItem = this.heap.pop();
        //Add it in the first element.
        this.heap.unshift(lastItem);
        let index = 0;
        //Bubble down/
        while(index < (this.heap.length-1)) {
            let currentVal = this.heap[index];
            //Get the child.
            let leftIndex = (2*index)+1;
            let rightIndex = (2*index)+2;
            let leftVal = (this.heap[leftIndex]) ? this.heap[leftIndex] : null;
            let rightVal = (this.heap[rightIndex]) ? this.heap[rightIndex] : null;
            //If current is larger then break.
            if(currentVal > leftVal && currentVal > rightVal) break;
            //Left Swap
            else if((leftVal > rightVal) && leftVal > currentVal) {
                this.heap[index] = leftVal; 
                this.heap[leftIndex] = currentVal;
                //For next iteration.
                index = leftIndex; 
            }
            // if((rightVal > leftVal) && rightVal > currentVal){
            else {
                //Right swap
                this.heap[index] = rightVal; 
                this.heap[rightIndex] = currentVal;
                //For next iteration.
                index = rightIndex; 
            }
        }
        return removedRoot;
    }
}