/* 
    Frequency Counter Pattern.

    When compare two string or array, instead of doing the nested loop, try to break down each string/array into 
    object, then compare two object which will be more efficent.
*/


// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and 
// checks whether there are any duplicates among the arguments passed in.&nbsp; You can solve this using the frequency counter 
// pattern OR the multiple pointers pattern.
function areThereDuplicates(...args)
{
    if(args.length === 0) return false;

    let collection = {};

    for(let value of args)
    {
        if(collection[value]) return true;
        collection[value] = value;
    }
    return false;
}

console.log(areThereDuplicates(1,2,3,32,5));
