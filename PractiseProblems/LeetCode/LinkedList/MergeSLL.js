
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1 && !list2) return list1;
    if(list2 && !list1) return list2;
    if(!list2 && !list1) return list1;
    
    let result = new ListNode();
    head = result;
    // console.log(result.next)
    while(list1 && list2) {
        if(list1.val < list2.val) {
            result.next = list1;
            list1 = list1.next;
        } else {
            result.next = list2;
            list2 = list2.next;
        }
        result = result.next;
    }
    result.next = !list1 ? list2 : list1;
    return head.next;
}


/*
//------- Option 2 -----
var mergeTwoLists = function(list1, list2) {
    if(list1 && !list2) return list1;
    if(list2 && !list1) return list2;
    if(!list2 && !list1) return list1;
    
    let result = new ListNode();
    head = result;
    // console.log(result.next)
    while(list1 || list2) {
        if(!list1) {
            result.next = list2;
            list2 = list2.next;
        } else if(!list2) { 
            result.next = list1;
            list1 = list1.next;
        }else if(list1.val < list2.val) {
            result.next = list1;
            list1 = list1.next;
        } else {
            result.next = list2;
            list2 = list2.next;
        }
        result = result.next;
        // console.log(result,list2)
    }
    return head.next;
}*/

/*
// -------Option 3.
var mergeTwoLists = function(list1, list2) {
    let current1 = list1;
    let current2 = list2;    
    let result = new LinkedList();
    let current1Val; let current2Val;
    //loop 
    while(current1 || current2) {
        current1Val = (current1) ? current1.val : null;
        current2Val = (current2) ? current2.val : null;
        // console.log(current1Val,current2Val)
        //If any one is null, insert the the other.
        if(current1Val !== null && current2Val === null) {
            result.insert(current1Val);
            current1 = (current1.next) ? current1.next : null;
        }
        if(current1Val === null && current2Val !== null) {
            result.insert(current2Val);
            current2 = (current2.next) ? current2.next : null;
        }
        if(current1Val !== null && current2Val !== null) {
            //Compare both
            if(current1Val <= current2Val) {
                result.insert(current1Val);
                current1 = (current1.next) ? current1.next : null;
            }
            else {
                result.insert(current2Val);
                current2 = (current2.next) ? current2.next : null;
            }   
        }
        // console.log(result);
        
    }    
    return result.head;
};

//Node class
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//Linked list
class LinkedList {
    constructor() {
        this.head = null;
    }
    
    insert(val) {
        const node = new Node(val);
        if(!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while(current) {
                if(!current.next) {
                   current.next = node;
                    break;
                }
                current = current.next;
            }
        }
        return this.head;
    }
}*/
