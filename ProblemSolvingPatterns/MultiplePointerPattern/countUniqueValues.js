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

/** Shafeek's own solution - woooooooooooooooooooooo  */


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

