/* 
    Frequency Counter Pattern.

    When compare two string or array, instead of doing the nested loop, try to break down each string/array into 
    object, then compare two object which will be more efficent.
*/


// Find the strings are valid anagrams - anagrams are the words formed by rearranging the another letters in the 
// another words such as cinema formed from iceman

/*
1. Inefficient way is to use the nested loop to check each string in the first letter are present in 
the next string. 
Ths will be O(n*2)

2. Best solution is to loop each string seperately instead of nester loop and break down into object 
and then run the third loop to compare each string.
This will consists of 3 loop intead of nested loop. So O(3n) = O(n)
*/

function validAnagrams(stringOne, stringTwo)
{
    // First check length of two strings.
    if(stringOne.length !== stringTwo.length)
        return false;

    //Loop first string to count the frequency of letters
    let firstObject = {};
    let secondObject = {};

    for(let char of stringOne)
    {
        firstObject[char] = (firstObject[char] !== undefined) ? firstObject[char]+1 : 1;
        console.log(firstObject[char]);
    }
    
    //Second stirng
    for(let charTwo of stringTwo)
    {
        secondObject[charTwo] = (secondObject[charTwo]) ? secondObject[charTwo]+1 : 1;
    }
    console.log(firstObject,secondObject);
    for(let key in firstObject)
    {
        if(firstObject[key] !== secondObject[key])
            return false;
    }
    return true;
}

console.log(validAnagrams('anagram', 'nagarama'));