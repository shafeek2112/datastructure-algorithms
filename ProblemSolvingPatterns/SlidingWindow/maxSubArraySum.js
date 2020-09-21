/*
    Sliding Window:
    ------------------------
    When need to check the consecutive/subset of items in the array or string, instead of adding/chekcing again and again, we simply 
    remove the first one and add the next item in the window. Just move the window, refer below question, then
    will get better understanding..

    Actual Defination from Author:
    ----------------------
    This pattern involves creating a window which can either be an array or number from one position to another
    Depending on a certain condition, the window either increases or closes (and a new window is created)
    Very useful for keeping track of a subset of data in an array/string etc.
*/

/*
Question:
---------
Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.
*/

//In the below solition, instead of keep adding the give num elements to find the greatest, just simply
//remove the previous one and then add the new one in the array.

function maxSubarraySum(arr, num) {
    
    if(arr.length < num) return null;

    let maxSum = 0;

    //First get the first given numb sum.
    for(let i = 0; i<num; i++)
    {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for(let j = num; j < arr.length; j++)
    {
        tempSum = tempSum - arr[ j - num] + arr[j];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

  console.log(maxSubarraySum([2,5,1,8,9,9],2));
  console.log(maxSubarraySum([1,2,5,2,8,1,5],2));
  console.log(maxSubarraySum([1,2,5,2,8,1,5],4));
  console.log(maxSubarraySum([4,2,1,6,2],4));
  console.log(maxSubarraySum([4,2,1,6],1));
  console.log(maxSubarraySum([],4));