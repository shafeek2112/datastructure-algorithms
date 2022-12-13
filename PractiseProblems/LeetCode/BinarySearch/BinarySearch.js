/* 
Binary Search
Easy
7.4K
160
company
Apple
company
Google
company
Adobe
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 0) return -1;
    //Recurrsion bs.
    function bs(start,end) {
        //base case.
        if(start > end) return -1;
        
        let middleIdx = Math.floor((start+end) / 2);
        let val = nums[middleIdx];
        if(val < target) {
            start = middleIdx + 1;
        } else if (val > target) {
            end = middleIdx-1;
        }
        else {
            return middleIdx;
        }
        return bs(start,end);
    }
    return bs(0,nums.length-1);
};