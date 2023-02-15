/* 
    Frequency Counter Pattern.

    When compare two string or array, instead of doing the nested loop, try to break down each string/array into 
    object, then compare two object which will be more efficent.
*/


//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(numOne,numTwo)
{

    numOne = numOne.toString();
    numTwo = numTwo.toString();

    if(numOne.length !== numTwo.length) return false;

    let obj = {};
    for(let i = 0; i<=numOne.length;i++ ) //2825
    {
        obj[numOne[i]] = (obj[numOne[i]]) ? obj[numOne[i]] + 1 : 1; // obj[2] = 2, ob[8] = 1, ob[5] = 1
    }

    for(let i = 0; i<=numTwo.length; i++) // 5822
    {
        if(obj[numTwo[i]] && obj[numTwo[i]] !== 0) 
        {    
            obj[numTwo[i]]--; // ob[5] = 0, ob[8] = 0, obj[2] = 0
        }
        else 
        {
            return false;
        }
    }

    return true;
}

// console.log(sameFrequency(28254,58422));
console.log(sameFrequency('anagram','nagaram'));