/***********************  Kmp SubString Search algorithms

To find the give pattern is present in the given string, in normal method, should compare each and every letter with the pattern using nested loop.
The time complexity is O(m*n).
When using this KMP, we can write algorithm to do sub string search in O(n) 

1. First find the lenght of prefix also same as suffix in all the point in the given pattern and store in the arrays. 

2. Then compare the pattern with string using the value computed in the step 1.

*/

/****************** Edge cases or the questions to interviewer: *******************************
    1. Input is Uppercase or lower case or mixed?
    2. What should be the return value? number of time the pattern found or return the index of the pattern match.

    -----Pseudo code ----------

     Create function accepting two param
     Edgecase - if length of any string is 0 then return.
     Step 1 
         Create a temp array from the pattern string.
         while loop with two 2 points i & j
         i start with 1. j start with 0 
         temp array 0th index is always 0.
         compare i & j, 
            if there is a match get the current index of j and add 1, store this in the ith place the temp array. 
                and increase 1 in j & i
            if there is no match 
                j != 0, get the previous index value of j and j should jump to that place and comare again.
                This will continue until the i goes to last element.

                j = 0, then set the tempArray[i]=0, increase i to 1
    Step 2
         while loop - with two pointer textPointer & patternpointer.
         Now compare the long string with the pattern. 
         if there is match then increase both pointer by 1.
         if there is no match 
            if patternPointer = 0 then increase the textPointer
            
            if patternPointer != 0, then get patternPointer's previous index of tempArray. tempArray[patternPointer-1] 
            and move the patternpointer to that value and loop again     
            
            
    
**********************************************************************************************/


// function findPatternMatching(pattern)
// {
//     let start = 0;
//     let end = 1;

//     let patternMatchArray = [];

//     //First value is always 0.
//     patternMatchArray[0] = 0;

//     //Loop the string and find the sufix n prefix pattern
//     while(end <= (pattern.length - 1))
//     {
//         if(pattern[start] === pattern[end]) {

//             start++;
//             patternMatchArray[end] = start;
//             end++;
//         }
//         else {

//             if(start === 0) {

//                 patternMatchArray[end] = 0;
//                 end++;
//             }
//             else {
//                 start = patternMatchArray[start - 1];
//             }
//         }
//     } 

//     return patternMatchArray;
// }


// function stringSearch(pattern, str)
// {
//     //Step 1 -  find the lenght of prefix also same as suffix in all the point in the given pattern and store in the arrays. 
//     let patternMatchArray = findPatternMatching(pattern);
    
//     //Step 2. Then compare the pattern with string using the value computed in the step 1. .
//     let i = 0;
//     let j = 0;
//     while(i <= (str.length - 1))
//     {
//         if(str[i] === pattern[j]) {
//             i++
//             j++;
//             if(j === (pattern.length)) return true;
//         }
//         else {
//             if(j === 0) i++;
//             j = (patternMatchArray[j-1]) ? patternMatchArray[j-1] : 0;
//         }
        
//     }
//     return false;
// }

// let pattern = 'abcaby';
// let str = 'abxabcabcaby';

// // let pattern = 'bcgl';
// // let str     = 'abcbcglx';

// // console.log(findPatternMatching(pattern));
// console.log(stringSearch(pattern,str));



//--------- 2nd attempt --------

/****************** Edge cases or the questions to interviewer: *******************************
    1. Input is Uppercase or lower case or mixed?
    2. What should be the return value? number of time the pattern found or return the index of the pattern match.

    -----Pseudo code ----------

     Create function accepting two param
     Edgecase - if length of any string is 0 then return.
     Step 1 
         Create a temp array from the pattern string.
         while loop with two 2 points i & j
         i start with 1. j start with 0 
         temp array 0th index is always 0.
         compare i & j, 
            if there is a match get the current index of j and add 1, store this in the ith place the temp array. 
                and increase 1 in j & i
            if there is no match 
                j != 0, get the previous index value of j and j should jump to that place and comare again.
                This will continue until the i goes to last element.

                j = 0, then set the tempArray[i]=0, increase i to 1
    Step 2
         while loop - with two pointer textPointer & patternpointer.
         Now compare the long string with the pattern. 
         if there is match then increase both pointer by 1.
         if there is no match 
            if patternPointer = 0 then increase the textPointer
            
            if patternPointer != 0, then get patternPointer's previous index of tempArray. tempArray[patternPointer-1] 
            and move the patternpointer to that value and loop again        
**********************************************************************************************/



function kmp2(text, pattern) {

    if(text.length === 0 || pattern.length === 0 ) {
        return -1;
    }
    
    //Create a temp array from the pattern string.
    let tempArray = [0];
    //i start with 1. j start with 0 
    let i = 1;
    let j = 0;

    while(i < pattern.length) {
        //if there is a match get the current index of j and add 1, store this in the ith place the temp array. 
        // and increase 1 in j & i
        if(pattern[j] == pattern[i]) {
            tempArray[i] = j+1;
            i++;
            j++;
        }
        else {
            // if there is no match and j != 0, get the previous index value of j and j should jump to that place and comare again.
            // This will continue until the i goes to last element.
            if(j != 0) {
                j = tempArray[j-1];
            }
            else {
                // j = 0, then set the tempArray[i]=0, increase i to 1
                tempArray[i] = 0;
                i++;
            }
        }
    }

    //Compare the pattern and text using the tempArray.
    let textPointer = 0;
    let patternPointer = 0;
    while(textPointer < text.length) {
        //if there is a match, increase textPointer & patternPointer.
        if(text[textPointer] == pattern[patternPointer]) {
            textPointer++;
            patternPointer++;
            //if the patternPoitner reached the final value means, the match found.
            if(patternPointer == pattern.length) return true; 
        }
        else {
            //if there is no match and patternPointer = 0 then increase the textPointer.
            if(patternPointer == 0) {
                textPointer++;
            }
            else {
                //if patternPointer is not 0, then get patternPointer's previous index of tempArray. tempArray[patternPointer-1]
                patternPointer = tempArray[patternPointer-1];
            }
        }
    }

    return false;
}

console.log(kmp2('abxabcabdabcaby','abcaby'));
console.log(kmp2('lolomglolololrofl','lolol'));
console.log(kmp2('wowomgzomg','omg'));
