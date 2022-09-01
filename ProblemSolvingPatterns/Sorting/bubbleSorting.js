/****************** Edge cases or the questions to interviewer: *******************************
    1. Input is Uppercase or lower case or mixed?
    2. Considered the input value is only numbers. +ve or -ve. 

    -----Pseudo code ----------
    - Function with accept array of numbers.
    - Assign two pointers first & second. First = 0 and Second = 1. 
    - While looping through the array. Check the array[first] is greated than array[second].
        - if yes, swap the numbers
        - if no, then leave it and check the next one.
        - increase First & Second pointer the count by 1 check with the next value. 
    - If the first pointer = arr.length, reset the First & Second pointer back to 0 & 1 respec, for next looping.
    - Everytime when looping is finished, adding the largest number at the end of the array. so next time should not check that already sorted numbers.
    - Return the array.
**********************************************************************************************/

function bubbleSorting(arr) {
    if(arr.lenght === 0) {
        return -1;
    }

    //Assign two pointers.
    let first = 0; let second = 1;
    let skip = 0;
    while(first < (arr.length - skip)) {
        
        // console.log(arr,arr[first],arr[second]);
        
        //Check the two values.
        if(arr[first] > arr[second]) {
            let temp = arr[first];
            arr[first] = arr[second];
            arr[second] = temp;
        }
        //Increment both pointers
        first++;
        second++;
        //If the current looping value is the last one. then stop looping and reset the pointers to 0 & 1.
        //So we dont increasing the second pointer greater than array length.
        if(first == (arr.length -skip -1)) {
            first = 0;
            second = 1;
            skip++;
        }
        // console.log(arr.length,first,second);
    }
    return arr;
}

console.log(bubbleSorting([8,12,33,48,2,5,30]));