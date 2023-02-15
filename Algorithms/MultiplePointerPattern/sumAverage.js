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
Write a function called averagePair Given a sorted array of integers and a target average, determine if there is a pair of values in 
the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.
*/

function averagePair(arr,number)
{
    if(number === 0) return false;

    let left = 0; let right = arr.length - 1;

    while(left < right)
    {
        let average = (arr[left] + arr[right]) / 2

        if(average === number) return true;

        if(average < number)
        {
            left++;
        }
        else
        {
            right--;
        }
    }
    
    return false;
}

console.log(averagePair([1,2,3], 1.7));