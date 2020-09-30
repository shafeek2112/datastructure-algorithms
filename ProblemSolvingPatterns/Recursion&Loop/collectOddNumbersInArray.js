
/* If want to store data in the resursion we can use two method one is Helper Method Recursion and other one is normal recursion. */

// Method one is using helper Method Recursion..
function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

// Method 2. - Normal recursion.
function collectOddNum(arr,resultParam=[])
{
    let result = resultParam.length === 0 ? [] : resultParam;

    let arrLength = arr.length;
    if(arrLength === 0) return result;

    if(arr[arrLength-1] % 2 !== 0) result.push(arr[arrLength-1]);

    arr.pop();
    collectOddNum(arr,result);
    return result;
}

// Method 3. - Normal recursion. Even Simpler. ------------------
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
                                    




console.log(collectOddNum([1,2,3,4,5,6,7,8,9,10,11]));