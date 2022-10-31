/**
*   Queue:
*        -	A FIFO data structure!
*        -	First In First Out
*
*       -	Similar to Stack, we can use the Array to implement the Queue. But adding or removing a item in the beginning of the array is O(n), so we use the Singly Linked List push and shift method.
*       -	Enqueue: Adding to the beginning of the Queue!
*       -	Dequeue: Removing from the beginning of the Queue.
* 
*/

class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }


    /**
    *   Enqueue - Implement push.
    */
    enqueue(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this.size;
    }

    /**
    *   Dequeue - Here implement shift as the dequeue for constanst time.
    */
    dequeue() {
        if(!this.first) return undefined;

        if(!this.first.next){
            this.first = null;
            this.last = null;
        }
        else {
            this.first = this.first.next;
        }
        this.size--;
        return this.size;
    }
}