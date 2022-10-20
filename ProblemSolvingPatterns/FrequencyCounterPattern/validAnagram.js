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

/****************** Edge cases or the questions to interviewer: *******************************
    1. Functions accepts only alphabetics or alphanumberics as well?
    2. Uppercase n lower case matters here?
    3. What should return if any invalid inputs such as special charcs or symbols etc.
    4. Should also consider spaces?
    5. Some of the examples from my understandings:
        - validAnagram('', '') // true
        - validAnagram('aaz', 'zza') // false
        - validAnagram('anagram', 'nagaram') // true
        - validAnagram("rat","car") // false) // false
        - validAnagram('awesome', 'awesom') // false
        - validAnagram('qwerty', 'qeywrt') // true
        - validAnagram('texttwisttime', 'timetwisttext') // true
**********************************************************************************************/

/* function validAnagrams(stringOne, stringTwo)
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
console.log(validAnagrams('anagram', 'nagarama')); */

/* 
3. Better solution using only two loops
*/
function validAnagrams(stringOne, stringTwo)
{
    // First check length of two strings.
    if(stringOne.length !== stringTwo.length)
        return false;

    //Loop first string to count the frequency of letters
    let lookup = {};

    for(let char of stringOne)
    {
        lookup[char] = (lookup[char] !== undefined) ? lookup[char]+1 : 1;
    }
    // console.log(lookup)
    //Second stirng
    for(let charTwo of stringTwo)
    {
        if(!lookup[charTwo])
        {
            return false;
        }
        else 
        {
            lookup[charTwo] -=1;
        }
    }
    // console.log(lookup)
    return true;
}

console.log(validAnagrams('anagram', 'nagaram'));
