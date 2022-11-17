
//HackerRank - https://www.hackerrank.com/challenges/one-month-preparation-kit-reverse-a-linked-list/problem


/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function reverse(llist) {
    // Write your code here
//Edge case 
if(!llist) return null;

//1 -> 2 -> 3 -> 4 -> 5 => null <- 1 <- 2 <- 3 <- 4 <- 5

//Store the head into prev 
let current = llist.next;
let prev = llist;
//remove the link for tail
prev.next = null;
//while -> current exists. 
while (current) {
    //store this in the nextNode 
    let nextNode = current.next;
    //Reverse the link
    current.next = prev;
    //Set the prev for next iteration.
    prev = current;
    //Set current for next iteration.
    current = nextNode;
}
//return the head
return prev;
}

