/*
    Multiple Pointer Pattern:
    ------------------------
    When need to find something in single array/string which need to compare each element with the other elements in the 
    string/array then we can use this pattern.

    Creating pointers or values that correspond to an index or position and move towards the beginning, 
    end or middle based on a certain condition
    Very efficient for solving problems with minimal space complexity as well
*/

/*
Question:
---------
Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair does not exist
*/

/****************** Edge cases or the questions to interviewer: *******************************

    1. Considering its a sorted array meaning there is no any possible case the array contains any invalid inputs such as special charcs, space or symbols etc?
    2. Do I need to consider the invalid numbers in the array?
    3. Some of the examples from my understandings:
        - sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
        - sumZero([-2,0,1,3]) // undefined
        - sumZero([1,2,3]) // undefined

**********************************************************************************************/


//****************Below is the efficient solution works only if the array is sorted.

function sumZero(arr)
{
    let left = 0;
    let right = arr.length - 1;

    while(left < right)
    {
        let sum = arr[left] + arr[right];
        
        if(sum === 0) 
        {
            return [arr[left], arr[right]];
        }
        else if(sum > 0)
        {
            right--;
        }
        else {
            left++;
        }
    }
}

console.log(sumZero([-3,-2,-1,0,1,2,3]));
console.log(sumZero([-2,0,1,3]));
console.log(sumZero([-1,1,2,3]));
