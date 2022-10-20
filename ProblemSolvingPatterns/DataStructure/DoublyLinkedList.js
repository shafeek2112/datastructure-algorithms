/***************** DoublyLinkedList *************************
 * A data structure that contains a head, tail and length property.
 * Linked Lists consist of nodes, and each node has a value and a pointer to next & prev node or null
 * 
 * 
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
    *   Adding a node to the end of the Doubly Linked List 
    *   -	Create a new node with the value passed to the function
    *   -	If the head property is null set the head and tail to be the newly created node 
    *   -	If not, set the next property on the tail to be that node
    *   -	Set the previous property on the newly created node to be the tail
    *   -	Set the tail to be the newly created node
    *   -	Increment the length
    *   -	Return the Doubly Linked List
     */
    push(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            //Set the new node.
            this.tail.next = node;
            //Set the prev property of new node as old tail.
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    /**
    *   Remove the last node. 
    *   - If there is no head, return undefined
    *   - Store the current tail in a variable to return later
    *   - If the length is 1, set the head and tail to be null
    *   - Update the tail to be the previous Node.
    *   - Set the newTail's next to null
    *   - Decrement the length
    *   - Return the value removed
    */
    pop() {
        if(!this.head) return undefined;

        let removedTail = this.tail;
        //If no prev for tail, means the length is 1.
        if(!this.tail.prev || this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            //Find the tail and make the tail.prev is the new tail and make the newtail.nex = null. 
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        //before we return the removedTail, jsut make it prev as null. it has the prev property 
        removedTail.prev = null;

        this.length--;
        return removedTail;
    }

    /**
    *   Remove from the begining 
    *    -	If length is 0, return undefined
    *    -	Store the current head property in a variable (we'll call it old head)
    *    -	If the length is one
    *    -	set the head to be null
    *    -	set the tail to be null
    *    -	Update the head to be the next of the old head
    *    -	Set the head's prev property to null
    *    -	Set the old head's next to null
    *    -	Decrement the length
    *    -	Return old head
    */
    shift() {
        if(!this.head) return undefined;

        let removedHead = this.head;

        //If one node.
        if(!this.head.next) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;
            //before we return the removedTail, jsut make it next as null. it has the next property 
            removedHead.next = null;
        }
        this.length--;
        return removedHead;
    }

    /** 
    * 
    *   -	Create a new node with the value passed to the function
    *   -	If the length is 0
    *       -	Set the head to be the new node
    *       -	Set the tail to be the new node
    *   -	Otherwise
    *       -	Set the prev property on the head of the list to be the new node
    *       -	Set the next property on the new node to be the head property 
    *       -	Update the head to be the new node
    *   -	Increment the length
    *   -	Return the list
    * 
    */
    unshift(val) {
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            let oldHead = this.head;
            this.head = newNode;
            oldHead.prev = this.head;
            this.head.next = oldHead;
        }
        this.length++;
        return this;
    }

    /** -- Get a Node by its position
 	* 	-	This function should accept an index
	*	-	If the index is less than zero or greater than or equal to the length of the list, return null
	*	-	Loop through the list until you reach the index and return the node at that 
	*/
    get(index) {
        //Edgecase
        if(index < 0 || index >= this.length) return undefined;
        //If 0
        if(index === 0) return this.head;
        //If last item.
        if(index === this.length-1) return this.tail;

        let currentNode = this.head;
        let count = 0;
        while(count < index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

}

let dll = new DoublyLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);