/***************** SinglyLinkedList *************************
 * A data structure that contains a head, tail and length property.
 * Linked Lists consist of nodes, and each node has a value and a pointer to another node or null
 * 
 * 
 */


 //Node Class
 class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
 }

 //Singly linked list
class SinglyLinkedList {
	
	constructor() {
		//head & tail & length 
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	
	/** 
	* Pushing the value into the node.
	*	This function should accept a value
	*	Create a new node using the value passed to the function
	*	If there is no head property on the list, set the head and tail to be the newly created node
	*	Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
	*	Increment the length by one
	*	Return the linked list
	*/
	push(val) {
		let newNode = new Node(val);
		//check if head is empty. means first item.
		if(!this.head) {
			// Add the first node.
			this.head = newNode;
			this.tail = this.head;
		} else {
			//Make the current tail's next as new node and new node is the tail now. 
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	/** ----- Remove last item
 	*	
	*	If there are no nodes in the list, return undefined
	*	Loop through the list until you reach the tail
	*	Set the next property of the 2nd to last node to be null
	*	Set the tail to be the 2nd to last node
	*	Decrement the length of the list by 1
	*	Return the value of the node removed
	* 
	*/
	pop() {
		if(!this.head) {
			return undefined;
		}
		let currentNode = this.head;
		let prevNode = null;
		//Traverse the list.
		while(currentNode.next) {
			prevNode = currentNode;
			current = currentNode.next;
		}
		this.tail = prevNode;
		//IF the length is 1. Then head and tail will be null.
		if(!prevNode) {
			this.head = null;
		} else {
			this.tail.next = null;
		}
		this.length--;
		return currentNode;
	}

	addFirst(val) {
		let newNode = new Node(val);
		//Add it as the head and the current head will be the new node's next.
		let currentHead = this.head;
		this.head = newNode;
		this.head.next = currentHead;
		this.length++
	}

 }