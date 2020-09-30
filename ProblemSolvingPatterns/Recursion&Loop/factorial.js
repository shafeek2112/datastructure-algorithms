

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



//Recursion
function factorial(num)
{
    if(num === 1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(10));  