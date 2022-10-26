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

    /** -- 
    * Get a Node by its position
 	* 	-   If the index is less than 0 or greater or equal to the length, return null
    *   -	If the index is less than or equal to half the length of the list
    *   -	Loop through the list starting from the head and loop towards the middle
    *   -	Return the node once it is found
    *   -	If the index is greater than half the length of the list
    *   -	Loop through the list starting from the tail and loop towards the middle
    *   -	Return the node once it is found
	*/
    get(index) {
        //Edgecase
        if(index < 0 || index >= this.length) return undefined;
        //If 0
        if(index === 0) return this.head;
        //If last item.
        if(index === this.length-1) return this.tail;

        //Check the index is greater than or less than the half of the length, then choose the starting 
        //point of the loop. either from end or from begining
        let currentNode;
        if(Math.floor(this.length/2) > index) {   
            currentNode = this.head;
            let count = 0;
            while(count < index) {
                currentNode = currentNode.next;
                count++;
            }
        }
        else {
            currentNode = this.tail;
            let count = this.length-1;
            while(count > index) {
                currentNode = currentNode.prev;
                count--;
            }
        }
        return currentNode;
    }

    /**
    *   Replacing the value of a node to the in a Doubly Linked List 
    *   -	Create a variable which is the result of the get method at the index passed to the function
    *        -	If the get method returns a valid node, set the value of that node to be the value passed to the function
    *        -	Return true
    *    -	Otherwise, return false
    */
    set(index, value) {
        let node = this.get(index);
        if(!node) return false;
        node.val = value;
        return node;
    }

    /**
    * 	Adding a node in a Doubly Linked List by a certain position
    *    -	Pseudocode:
    *    -	If the index is less than zero or greater than or equal to the length return false
    *    -	If the index is 0, unshift
    *    -	If the index is the same as the length, push
    *    -	Use the get method to access the index -1
    *    -	Set the next and prev properties on the correct nodes to link everything together
    *    -	Increment the length 
    *    -	Return true
    * 
    */
    insert(index,val) {
        //Edgecase
        //Be careful, its not the this.length less than or equal to. Just lessthan only, because can be 
		//possible to insert as the last item.
        if(index < 0 || index > this.length) return undefined;
        //If 0
        if(index === 0) {
            let node = this.unshift(val);
            return (!node) ? false : true;
        }
        //if inedx = length, insert at the last.
        if(index === this.length) {
            let node = this.push(val);
            return (!node) ? false : true;
        }
        //Create a new node.
        let newNode = new Node(val);

        //Get the node
        //------Below one is also correct, by get the node at index. but to maintain consistency with SLL, use index-1 as the param for get method.
        
        /*
        let node = this.get(index);
        if(!node) return undefined;
        //Get the old node's prev & next node.
        let oldPrev = node.prev;
        //Set new node's previous
        newNode.prev = oldPrev;
        //Set oldprev 's next as new node.
        oldPrev.next = newNode;
        //Set new node's next as oldneext.
        newNode.next = node;
        //Set the oldnext's previous as the current node.
        node.prev = newNode;
        */

        let node = this.get(index-1);
        if(!node) return false;
        //Get the new next node for current node.
        let afterNode = node.next;
        //Set previous next as current node.
        node.next = newNode;
        //Set current node's prev
        newNode.prev = node;
        //Set current node's next
        newNode.next = afterNode;
        //Set current node as prev for next node.
        afterNode.prev = newNode;

        this.length++;
        return true;
    }

    /**
    *   Removing a node in a Doubly Linked List by a certain position 
    *    -	If the index is less than zero or greater than or equal to the length return undefined
    *    -	If the index is 0, shift
    *    -	If the index is the same as the length-1, pop
    *    -	Use the get method to retrieve the item to be removed
    *    -	Update the next and prev properties to remove the found node from the list
    *    -	Set next and prev to null on the found node
    *    -	Decrement the length
    *    -	Return the removed node.
    */
    remove(index) {
        //Edgecase
        if(index < 0 || index >= this.length) return undefined;

        if(index === 0) {
            return this.shift();
        }
        //if inedx = length, insert at the last.
        if(index === this.length-1) {
            return this.pop();
        }
        //------- BELOW block also will work. --------
        /*
        //Get the prev node.
        let node = this.get(index-1);
        let removedNode = node.next;
        let newNextNode = removedNode.next;
        //Set prev node's next & newPrevious node.
        node.next = newNextNode;
        newNextNode.prev = node;
        */

        //------- BELOW block for get the current node --------
        //Get the current node.
        let removedNode = this.get(index);
        let prevNode = removedNode.prev;
        let nextNode = removedNode.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        
        //Just for safer purpose. dont want to return the linkage, just return the node.
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
    }

    /*
    *   Reversing a Doubly Linked List in place!
    *   -	Pseudocode:
    *   -	Create a variable called current and set it to be the head of the list
    *   -	Create a variable called tail and set it to be the head of the list
    *   -	Loop through the list and set the next property of the current node to be the prev property of the current node
    *   -	If there is no next property, set the tail to be the head and the head to be the current variable
    *   -	Return the list
    */
    reverse() {
        if(!this.head) return undefined;
        
        this.print();

        //Make the tail as the new head.
        this.head = this.tail;
        let prevNode = this.head;
        let nextNode = this.tail.prev;
        while(nextNode) {
            let current = nextNode;
            nextNode = nextNode.prev;
            current.prev = prevNode; 
            prevNode.next = current;
            prevNode = current;
        }
        this.tail = prevNode;
        this.tail.next = null;
        this.head.prev = null;
        
        this.print();
        
        return this;
    }

    //Just to see whats happening.
    print() {
        let current = this.head;
        let pr = [];
        pr.push(current.val);
        while(current.next) {
            current = current.next;
            pr.push(current.val);
        }
        console.log(pr);
    }
}

let dll = new DoublyLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);