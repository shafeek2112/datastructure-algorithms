
// Loop to find the fibonacci series on the given nth position.
function fibonacci_loop(n)
{
    // Check the number is valid.
    if(!isNaN(n) && n > 0)
    {
        let returnValue = 0;
        if(n === 1 || n === 2)
        {
            returnValue = 1;
        }
        else 
        {
            let nMniusOne = nMinusTwo = 1;
            for(let i=3; i<=n; i++) 
            {
                returnValue = nMniusOne + nMinusTwo;
                if(i === n)
                    break;
                nMinusTwo = nMniusOne;
                nMniusOne = returnValue;
            }
        }
        return returnValue;
    }
    return 'Please enter valid integer';
}


console.log(fibonacci_loop(21));