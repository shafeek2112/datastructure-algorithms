/***********************  Kmp SubString Search algorithms

To find the give pattern is present in the given string, in normal method, should compare each and every letter with the pattern using nested loop.
The time complexity is O(m*n).
When using this KMP, we can write algorithm to do sub string search in O(n) 

1. First find the lenght of prefix also same as suffix in all the point in the given pattern and store in the arrays. 

2. Then compare the pattern with string using the value computed in the step 1.

*/
function findPatternMatching(pattern)
{
    let start = 0;
    let end = 1;

    let patternMatchArray = [];

    //First value is always 0.
    patternMatchArray[0] = 0;

    //Loop the string and find the sufix n prefix pattern
    while(end <= (pattern.length - 1))
    {
        if(pattern[start] === pattern[end]) {

            start++;
            patternMatchArray[end] = start;
            end++;
        }
        else {

            if(start === 0) {

                patternMatchArray[end] = 0;
                end++;
            }
            else {
                start = patternMatchArray[start - 1];
            }
        }
    } 

    return patternMatchArray;
}


function stringSearch(pattern, str)
{
    //Step 1 -  find the lenght of prefix also same as suffix in all the point in the given pattern and store in the arrays. 
    let patternMatchArray = findPatternMatching(pattern);
    
    //Step 2. Then compare the pattern with string using the value computed in the step 1. .
    let i = 0;
    let j = 0;
    while(i <= (str.length - 1))
    {
        if(str[i] === pattern[j]) {
            i++
            j++;
            if(j === (pattern.length)) return true;
        }
        else {
            if(j === 0) i++;
            j = (patternMatchArray[j-1]) ? patternMatchArray[j-1] : 0;
        }
        
    }
    return false;
}

let pattern = 'abcaby';
let str = 'abxabcabcaby';

// let pattern = 'bcgl';
// let str     = 'abcbcglx';

// console.log(findPatternMatching(pattern));
console.log(stringSearch(pattern,str));