

// 5 = 5*4*3*2*1

// Loop method
/* function factorial(num)
{
    let output = 1;
    while(num > 0)
    {
        output = output * num;
        num--;
    }
    return output;
} */

/****************** Edge cases or the questions to interviewer: *******************************

    1. Functions should accept only numbers. What should return if any invalid inputs such as special charcs or symbols etc.
    

**********************************************************************************************/

/*
    Recursion
    Two important parts of a recursive function!
    - Base Case – Condition when recursion ends.
    - Different Input – Every time, should call the function with different input.
*/

function factorial(num)
{
    //Base case.
    if(num === 1) return 1;

    //Different Input – Every time, should call the function with different input.
    return num * factorial(num-1);
}

console.log(factorial(10));  