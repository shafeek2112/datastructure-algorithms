/*
This is the naive approach for the string search.

To find the give pattern is present in the given string, in normal method, should compare each and every letter with the pattern using nested loop.
The time complexity is O(m*n).

Better solution for this is KMP algorithm. It will be in other file.

Consider all letter are in
*/

function naiveSearch(longString, pattern) {

    let patternLenght = pattern.length;
    let longStringLength = longString.length;
    
    //Edge case.
    if(longStringLength == 0 || patternLenght == 0) {
        return 0;
    }

    let count = 0;

    
    //loop through the long string
    for(i=0; i < longStringLength; i++) {
        
        let longStringIncrement = i;

        //loop through pattern.
        for(j=0; j < patternLenght; j++) {

            console.log(longString[longStringIncrement], pattern[j]);

            //Check letters
            if(longString[longStringIncrement] !== pattern[j]){
                break;
            }
            // if all the letters are checked. then increase the count
            if((patternLenght - 1 == j)) {
                count++
                break;
            }
            longStringIncrement++;
        }
        //If the longstringincrement reached final letter then break.
        if((longStringLength - 1 == longStringIncrement)) {
            break;
        }
    }
    return count;
}


// let result = naiveSearch('abcdabcabcdf','abcdf');
let result = naiveSearch('wowomgzomg','omg');

console.log('count=', result);