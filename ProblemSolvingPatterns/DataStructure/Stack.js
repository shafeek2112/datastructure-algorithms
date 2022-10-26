/**
*   Stack:
*        -	A LIFO data structure!
*        -	The last element added to the stack will be the first element removed from the stack
*
*        -	There is more than one implantation for stacks, like an array, linked list, doubly linked list etc.
*        -	Stacks only need push & pop, so we don’t use Array because it has lot other helper methods.
*        -	We implement out own stack using Linked List. 
*        -	In Singly Linked List, pop is not the constant time as need to loop thorough the entire list to remove the last item. 
*        -	So we use the shift and unshift methods as push & pop here.
*        -	In the Doubly Linked List push and pop are constant time. But here we implement SLL for easier.
* 
*/

class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }


    /**
    *   Push - Implement unshift as the push.
    */
    push(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            let oldHead = this.first;
            this.first = newNode;
            this.first.next = oldHead;
        }
        this.size++;
    }

    /**
    *   Pop - Here implement shift as the pop for constanst time.
    */
    pop() {
        if(!this.first) return undefined;

        if(!this.first.next){
            this.first = null;
            this.last = null;
        }
        else {
            this.first = this.first.next;
        }
        this.size--;
    }
}