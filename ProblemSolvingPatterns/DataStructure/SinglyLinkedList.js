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
			currentNode = currentNode.next;
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

	/** --Remove item from first.
 	* 
	* 	If there are no nodes, return undefined
	*	Store the current head property in a variable
	*	Set the head property to be the current head's next property
	*	Decrement the length by 1
	*	Return the value of the node removed
	*/
	shift() {
		//Check the edgecase
		if(!this.head) return undefined;

		let prevHead = this.head;
		if(prevHead.next) {
			this.head = prevHead.next;
		} else {
			this.head = null;
			this.tail = null;
		}
		this.length--;
		return prevHead
	}

	/** 
 	* 	Add node at first.
	* 	- This function should accept a value
	*	-	Create a new node using the value passed to the function
	*	-	If there is no head property on the list, set the head and tail to be the newly created node
	*	-	Otherwise set the newly created node's next property to be the current head property on the list
	*	-	Set the head property on the list to be that newly created node
	*	-	Increment the length of the list by 1
	*	-	Return the linked list
	*/
	unShift(val) {
		let newNode = new Node(val);
		//Check head is null
		if(!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			//Add it as the head and the current head will be the new node's next.
			let currentHead = this.head;
			this.head = newNode;
			this.head.next = currentHead;
		}
		this.length++
		return this;
	}

	/** -- Get a Node by its position
 	* 	-	This function should accept an index
	*	-	If the index is less than zero or greater than or equal to the length of the list, return null
	*	-	Loop through the list until you reach the index and return the node at that 
	*/
	get(index) {
		//Check the length
		if((index < 0) || (this.length <= index)) return undefined;

		//IF the index is at the end.
		if(this.length == (index -1)) return this.tail

		//Traverse.
		let count = 0;
		let currentNode = this.head;
		while(count < index) {
			currentNode = currentNode.next;
			count++; 
		}
		return currentNode;
	}

	/** -- Set value to a node.
 	* 	- This function should accept a value and an index
	*	- Use your get function to find the specific node.
	*	- If the node is not found, return false
	*	- If the node is found, set the value of that node to be the value passed to the function and return true
 	*/
	set(index,value) {
		//Get the node.
		let node = this.get(index);
		if(node) {
			node.val = value;
			return true;
		}
		return false;
	}

	/** 
 	* Insert a new node
 	*  	- If the index is less than zero or greater than the length, return false
	*	- If the index is the same as the length, push a new node to the end of the list
	*	- If the index is 0, unshift a new node to the start of the list
	*	- Otherwise, using the get method, access the node at the index - 1
	*	- Set the next property on that node to be the new node
	*	- Set the next property on the new node to be the previous next
	*	- Increment the length
	*	- Return true
	* 
	*/
	insert(index,value) {
		//Be careful, its not the this.length less than or equal to. Just lessthan only, because can be 
		//possible to insert as the last item.
		if(index < 0 || this.length < index) return false ;

		//Check the index is last or first.
		if(index == this.length) {
			this.push(value);// this.length is already incremented 
			return true;
		}
		if(index == 0) {
			this.unShift(value);
			return true;
		}
		
		let newNode = new Node(value);
		//Use get method to get the index-1 th node.
		let prevNode = this.get(index-1);
		//Set the new node next.
		newNode.next = prevNode.next;
		//Set the new node as the previous node next.
		prevNode.next = newNode;
		this.length++;	
		return true;	
	}

	/**
 	*	Remove a node from a specific position 
	* 	- If the index is less than zero or greater than the length, return undefined
	*	- If the index is the same as the length-1, pop
	*	- If the index is 0, shift
	*	- Otherwise, using the get method, access the node at the index - 1
	*	- Set the next property on that node to be the next of the next node
	*	- Decrement the length
	*	- Return the value of the node removed 
	*/
	remove(index) {
		//Edgecase.
		if(index < 0 || index >= this.length) return undefined;

		//If remove the first node.
		if(index === 0) return this.shift();
		//If remove the last node.
		if(index === this.length-1) return this.pop();

		//Remove inbetween. Get the index-1 th node.
		let prevNode = this.get(index-1);
		let removeNode = prevNode.next;
		let newNext = removeNode.next;
		//Set the newnext node of previous node.
		prevNode.next = newNext;
		this.length--;
		return removeNode;
	}

	/**
 	*	Reversing the linked list in place. Without duplicating it.
	*	- Set the tail as the current head.
	*	- Create a variable called prev and assign head to it.
	*	- Create a variable next and assign head.next.
	*	- Loop through the list.
	*	- Create a variable current and set this next.
	*	- Make next = current.nexxt
	*	- Set the current.next = previous -> reversing the list.
	*	- Set the prev = current for next loop.
	*	- After the loop, set the head = prev which is current.
	*	- Finally make tail.next = null
	*	- Return the list.
	*/
	reverse() {
		if(!this.head) return undefined;
		//Make the head as the new tail.
		this.tail = this.head;
		let prev = this.head;
		let next = this.head.next;
		//loop through
		while(next) {
			let current = next;
			next = current.next; // for next loop.
			//set the new next as the prev to reverse.
			current.next = prev; 
			//Set the new prev which is current.
			prev = current;
		}
		this.head = prev;
		this.tail.next = null;
		return this;
	}
}

let sl = new SinglyLinkedList();
sl.push(1);
sl.push(2);
sl.push(3);
sl.push(4);
sl.push(5);