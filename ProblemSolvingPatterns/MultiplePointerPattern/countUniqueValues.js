/*
    Multiple Pointer Pattern:
    ------------------------
    When need to find something in single array/string which need to compare each element with the other elements in the 
    string/array then we can use this pattern.

    Actual Defination from Author:
    ----------------------
    Creating pointers or values that correspond to an index or position and move towards the beginning, 
    end or middle based on a certain condition
    Very efficient for solving problems with minimal space complexity as well
*/

/*
Question:
---------
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted.
*/

/****************** Edge cases or the questions to interviewer: *******************************

    1. As mentioned its a sorted array meaning there is no any possible case the array contains any invalid inputs such as special charcs, space or symbols etc?
    2. Do I need to consider the invalid numbers in the array?
    3. Some of the examples from my understandings:
        - countUniqueValues([1,1,1,1,1,2]) // 2
        - countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
        - countUniqueValues([]) // 0
        - countUniqueValues([-2,-1,-1,0,1]) // 4
**********************************************************************************************/

/** 1st implement - Without using the Multiple pointer. O(n) Looping is based on array length  */
function countUniqueValues(arr)
{
    let uniqueCount = 0;
    if(arr.length > 0)
    {
        let obj = {};
        for(let value of arr)
        {
            uniqueCount += (obj[value]) ? 0 : 1;
            obj[value] = value;
        }
    }
    return uniqueCount;
}

console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));


/** 2nd implement - Using the Multiple pointer. O(n) Looping is based on array length  */
function countUniqueValues2(arr2)
{
    //Initiate two pointers. left & Right. 
    //One object to store the value count.
    //uniqueValues counter

    //while loop. => left < right

        //if the arr2[left] = arr2[right], then break the loop since this is the sorted array.
            //If the uniqueValues variable is 0 and arr2[left] = arr2[right], then add 1 may be the array consists of only one integer.

        //if arr2[left] is not in obj, then increment uniqueValues and left.

        //if arr2[right] is not in obj, then increment uniqueValues and decrement right.

    //end while loop

    //return uniqueValues.
}

