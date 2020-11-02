/* 
    Frequency Counter Pattern.

    When compare two string or array, instead of doing the nested loop, try to break down each string/array into 
    object, then compare two object which will be more efficent.
*/

/* QUESTION: 
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared 
in the second array. The frequency of values must be the same.

Ways:
1. Inefficient way is to use the nested loop to check each array against second array
Ths will be O(n*2)

2. Best solution is to loop each array seperately instead of nester loop and break down into object 
and then run the third loop to compare each array.
This will consists of 3 loop intead of nested loop. So O(3n) = O(n)
*/

/* function same(arrayOne,arrayTwo)
{
    if(arrayOne.length !== arrayTwo.length)
        return false;

    let objectFirst = {};
    let objectSecond = {};

    //Loop first array
    for(let number of arrayOne)
    {
        objectFirst[number ** 2 ] = (objectFirst[number ** 2 ]) ? objectFirst[number ** 2 ] + 1 : 1;
    }

    //Loop Seond array
    for(let number of arrayTwo)
    {
        objectSecond[number] = (objectSecond[number]) ? objectSecond[number] + 1 : 1;
    }

    //Comapring
    for(let key in objectFirst)
    {
        if(objectFirst[key] !== objectSecond[key])
            return false;
    }

    return true;
} */

function same(arrayOne,arrayTwo)
{
    if(arrayOne.length !== arrayTwo.length)
        return false;

    let objectFirst = {};
    let objectSecond = {};

    //Loop first array
    for(let number of arrayOne)
    {
        objectFirst[number ** 2 ] = (objectFirst[number ** 2 ]) ? objectFirst[number ** 2 ] + 1 : 1;
    }

    for(let number of arrayTwo)
    {
        if(objectFirst[number] && objectFirst[number] !== 0) {
            objectFirst[number]--
        }
        else {
            return false;
        }
        
    }

    return true;
}

console.log(same([1,2,1], [4,1,1]))