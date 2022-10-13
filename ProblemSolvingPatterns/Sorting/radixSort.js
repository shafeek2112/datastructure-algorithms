/**************** RadixSort ******************
    This works with +ve numbers/digits only. Just consider the number of digits in the number, dont care of +ve or -ve number. -ve digit also considered as the positive value here.
    Unlike other sorting alogrithms this is not the comparision algorithm.
    It never makes comparisons between elements! It exploits the fact that information about the size of a number is encoded in the number of digits.  
    More digits means a bigger number!

    First need to find the maximum digits that largest number has.
    Loop through using that digit i.
    Create a bucket with 10 empty sub arrays.
    Another loop for given array. 
    Get the ith posistion of the each element in the array and put this item based on the ith position into the bucket array.
    Then concat the buckets elements in the same order. 
    This will repeat until the i finishes. 

*/

/****************** Edge cases or the questions to interviewer: *******************************
    1. Considered the inpust are only numbers or empty arrays. This works with numbers/digits only
    2. Considered the input value is only numbers. +ve or -ve. 

    We need two helper functions to complete this. 
        One function is to get maximum digits in the largest number in the given array.
        Other is find the digit in the nth place of that number.

    -----Pseudo code ----------
    Get maximum digit in the largest number - Helper function:
        - Function accepts the array.
        - Add new variable with maxNumber = 0.
        - Loop through the array and find the digits in each element and compare with maxNumber.

    Get the ith digit of the number - Helper function.
        - Function accept the integer and the i
        - Get the ith position of the element from the given integer but starts from reverse order.

    RadixSort:
        - It accepts a number array argument.
        - First, find the maximum digits in the largest number.
        - Use this as i for the loop.
        - Declare bucketArray inside the loop with 10 empty sub array.
        - Another for loop to iterate the numbers in the numArr.
        - Using getDigit helper, find the ith position digit in for each number in the array 
        - Put that number based on the i position value in the respective subarray in bucketArray.
        - Each time second loop finished, concat the bucketArray in the same order and set it in numArr for next ith iteration
        - Repeat this until the first loop i completes.
        - Return the array at the end.
    
**********************************************************************************************/

// Helper function to find the correct position of the pivot.
function getMostDigits(numArr) {
    let maxDigit = 0;
    for(ii=0; ii<numArr.length; ii++){
        //find the maximum
        maxDigit = Math.max(maxDigit, digitCount(numArr[ii]));
    }
    return maxDigit;
}

function digitCount(num) {
    //Two methods. 
    //1. Convert the number into +ve, floor and string and find the length.
    //2. Use Math calculation.

    //1.Convert the number into +ve, floor and string and find the length.
    return Math.floor((Math.abs(num))).toString().length;

    //2. Using Math. If 0, Log0 = infinity, so handle this case by return 1
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, i) {
    //Two methods.
    //1. Convert into string and get the ith element from the reverse order.
    //2. Use Math calcualtion.

    //1.Convert into string and get the ith element from the reverse order.
    const stringC = Math.floor((Math.abs(num))).toString();
    const length = (stringC.length - 1);
    return (i > length) ? 0 : stringC[length - i];

    //2. Using Math.
    // return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function radixSort(numArr) {
    for(i=0; i<getMostDigits(numArr);i++) {
        //Declare buckenArray - two ways
        // let bucketArray = [[],[],[],[],[],[],[],[],[],[]]; // Common way.
        let bucketArray = Array.from({length: 10}, () => []); //Use JS inbuilt 

        //Loop through the numArr
        for(j=0;j<numArr.length;j++) {
            //Get the ith position of j using helper.
            let iPosition = getDigit(numArr[j], i);
            //Put it under the correct array in buckerArr
            bucketArray[iPosition].push(numArr[j]);
        }
        //Concat all the items in the bucketArr in the same order for next iteration.
        //Two ways. 
        //1. Loop the bucketArr and join all.
        //2. JS concat method.
        
        //1. Loop the bucketArr and join all.
        // numArr = [];
        // for(k=0;k<bucketArray.length; k++) {
        //     numArr.push(...bucketArray[k]);
        // }

        //2.JS inbuilt method.
        numArr = [].concat(...bucketArray);
    }
    return numArr;
}

// console.log(getDigit(3123,4))

console.log(radixSort([34,11,23,4,292,2,1987,45,798,96,3,22,1093]));
// console.log(quickSort([55,-4,100,9,-5,4,3,5,6,7,8]));



function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  function radixSort(nums){
      let maxDigitCount = mostDigits(nums);
      for(let k = 0; k < maxDigitCount; k++){
          let digitBuckets = Array.from({length: 10}, () => []);
          for(let i = 0; i < nums.length; i++){
              let digit = getDigit(nums[i],k);
              digitBuckets[digit].push(nums[i]);
          }
          nums = [].concat(...digitBuckets);
      }
      return nums;
  }
  
  radixSort([23,345,5467,12,2345,9852])
  