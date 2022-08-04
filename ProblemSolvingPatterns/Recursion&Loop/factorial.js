

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

//Recursion
function factorial(num)
{
    if(num === 1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(10));  