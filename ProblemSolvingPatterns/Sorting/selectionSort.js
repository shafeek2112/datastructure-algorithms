/****************** Edge cases or the questions to interviewer: *******************************
    1. Input is Uppercase or lower case or mixed?
    2. Considered the input value is only numbers. +ve or -ve. 

    -----Pseudo code ----------
    - Function with accept array of numbers.
    - Store the first element is the smallest one.
    - Compare the smallest element with all the other element, until find the smallest element.
    - If smallest is found then store this as the smallest in the first index.
    - Then start loop from the second index, and do the comparison again to find the next smalles one and 
        store it in the second index. And repeat again. 
    - Return the array.
**********************************************************************************************/

function selectionSorting(arr) {
    if(arr.length === 0) {
        return -1;
    }

    let min;

    //loop through the array
    for(i=0;i<arr.length;i++) {
        //store the first index as minimum.
        min = i;
        //nested loop to compare the other elements
        //Compare the next index of i, so j=i+1.
        for(j=(i+1);j<arr.length;j++) {
            //Compare min with j
            if(arr[min] > arr[j]) {
                min = j;
            }
        }
        //Swap the min into i, if i!=min
        if(i != min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSorting([8,12,33,48,2,5,30]));
console.log(selectionSorting([1,6,15,33,30,32,26,36,42,45,46,47,48]));