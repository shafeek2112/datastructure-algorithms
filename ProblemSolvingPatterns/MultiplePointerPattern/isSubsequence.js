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
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a 
subsequence of the characters in the second string. In other words, the function should check whether the 
characters in the first string appear somewhere in the second string, without their order changing.
*/

function isSubsequence(strOne,strTwo)
{
    strOne = strOne.toString();
    strTwo = strTwo.toString();

    if(strTwo.length === 0 || strOne.length === 0) return false;

    for(let i = 0; i <= strTwo.length; i++)
    {
        if(strOne[0] === strTwo[i])
        {
            strOne = strOne.slice(1);
        }
        if(strOne === '') return true;
    }

    return false;
}

console.log(isSubsequence('hello','hello world'));
console.log(isSubsequence('hello','helolo world'));
console.log(isSubsequence('hello','heloo worlld'));
console.log(isSubsequence('sing','sting'));
console.log(isSubsequence('abc','abracadabra'));
console.log(isSubsequence('abc','acb'));