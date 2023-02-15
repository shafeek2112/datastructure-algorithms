/****************** Edge cases or the questions to interviewer: *******************************
    1. Input is Uppercase or lower case or mixed?
    2. Considered the input value is only numbers. +ve or -ve. 

    -----Pseudo code ----------
    - Start by picking the second element in the array
    - Now compare the second element with the one before it and swap if necessary.
    - Continue to the next element and if it is in the incorrect order, iterate through the sorted portion 
        (i.e. the left side) to place the element in the correct place.
    - Repeat until the array is sorted.
**********************************************************************************************/

//------------- Solution 1 - Own -----------------

function insertionSorting(arr) {
    if(arr.length === 0) {
        return -1;
    }

    //Start by picking the second element in the array
    for(i=1;i<arr.length;i++) {
        // Now compare the second element with the one before it.
        for(j=(i-1);j>=0;j--) {
            //Compare j with (j+1) - Dont use i, because if we swap value in the i will change.
            if(arr[j+1] > arr[j]) {
                //(j+) > j, then just break. because already sorted
                break;
            }
            //if (j+1) is lesser than j, then swap both value and compare again in the next loop.
            if(arr[j+1] < arr[j]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(insertionSorting([3,44,38,5,47,15]));
console.log(insertionSorting([8,12,33,48,2,5,30]));
console.log(insertionSorting([1,6,15,33,30,32,26,36,42,45,46,47,48]));


//------------- Solution 2 - Author (Simple) -----------------
function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        //Store the i value in the variable.
        currentVal = arr[i];
        //arr[j] > currentVal => this will stop the loop when the i is greater than j. So, when the loop is break, 
        // thats the correct spot for i to swap.
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            //Instead of swaping the i every time, Just moving the j into one level up to j+1. 
            //SO at this stage j & j+1 are same.
            arr[j+1] = arr[j]
        }
        //Once the loop break, thats the correct spot for i. When loop breaks, swap the i into j+1. not the j.
        arr[j+1] = currentVal;
    }
    return arr;
}
