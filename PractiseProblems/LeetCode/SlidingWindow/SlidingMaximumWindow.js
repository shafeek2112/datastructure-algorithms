/** 
239. Sliding Window Maximum
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    
    const result = [];
    const deq = new Deque();

    //Loop through k
    for(let i = 0; i < k; i++) {
        //Clean the queue.
        cleanQueueHelper(i);
        //Push the idx i into the queue.
        deq.push(i);
    }
    //max is always in the first.
    result.push(nums[deq.peekFront()]);

    //Use sliding window technique to find the next max s.
    for(let i = k; i < nums.length; i++) {
        //Clean the queue.
        cleanQueueHelper(i);
        //Push the idx i into the queue.
        deq.push(i);
        result.push(nums[deq.peekFront()]);
    }

    function cleanQueueHelper(i) {
        //First check & remove the idx from queue which are not in the window.
        while(!deq.isEmpty() && (i - k) >= deq.peekFront()) {
            deq.shift();
        }
        //Clean the queue which are smaller than the current
        while(!deq.isEmpty() && nums[i] >= nums[deq.peekBack()]) {
            deq.pop();
        }
    }

    return result;
};

// Class for a node in a linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

// Doubly linked list
class Deque {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    unshift(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    shift() {
        if (!this.head) {
            return null;
        }

        const removed = this.head;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removed.next;
            this.head.prev = null;
        }
        return removed.value;
    }

    pop() {
        if (!this.tail) {
            return null;
        }

        const removed = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removed.prev;
            this.tail.next = null;
        }
        return removed.value;
    }

    peekFront() {
        return this.head ? this.head.value : null;
    }

    peekBack() {
        return this.tail ? this.tail.value : null;
    }

    isEmpty() {
        return true ? this.head == null : false;
    }
}