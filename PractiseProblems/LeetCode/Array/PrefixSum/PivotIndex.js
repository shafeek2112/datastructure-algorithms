/* 
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

 

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    //Edgecase :
    if(nums.length === 0) return -1;
    
    /*
    //--------- Option 1 -------
    let leftcount; let rightcount;
    //Loop
    for(i=0; i<nums.length; i++) {
        //check left sum and right sum of i
        leftcount = 0; rightcount = 0;
        let left = i-1; let right = i+1; 
        while(left >= 0 || right < nums.length) {
            if(left >= 0) {
                leftcount += nums[left];
                left--;
            }
            if(right < nums.length) {
                rightcount += nums[right];
                right++;
            }
        }
        if(leftcount == rightcount) {
            return i;
            break;
        }
    }
    return -1;*/
    
    //-----Option 2 ----
    let sumLeft = [];
    sumLeft[0] = 0;
    let sumRight = [];
    sumRight[0] = 0;
    //Loop throu the array to find the left & right sum of nums[0]
    for(let i=1;i<nums.length;i++) {
        sumRight[0] += nums[i];
    }
    if(sumLeft[0] === sumRight[0]) return 0;
    
    //Find left & right for all the index
    for(let i=1;i<nums.length; i++) {
        //Add sumLeft[i-1]
        sumLeft[i] = sumLeft[i-1] + nums[i-1];
        //Minus nums[i] from sumRight
        sumRight[i] = sumRight[i-1] - nums[i];
        
        if(sumLeft[i] === sumRight[i]) return i;
    }
    return -1;
};