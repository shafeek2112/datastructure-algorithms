/**************** Quicksort ******************
    Like mergesort, exploits the fact that arrays of 0 or 1 element are always sorted.
    Working by selecting one element in the array called Pivot and finding the correct postiion of the element.
    Two function here, one is helper function to find the correct position of the element in the array.
        other is the main function which is doing the quick sort.

*/

/****************** Edge cases or the questions to interviewer: *******************************
    1. Considered the inpust are only numbers or empty arrays. 
    2. Considered the input value is only numbers. +ve or -ve. 


    -----Pseudo code ----------
    Pivot Helper function:
        - It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
        - Grab the pivot from the start of the array 
        - Store the current pivot index in a variable (this will keep track of where the pivot should end up)
        - Loop through the array from the start until the end
            - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
        - Swap the starting element (i.e. the pivot) with the pivot index
        - Return the pivot index
    
    QuickSort:
        - It accepts three arguments, left, right & array.
        - Call the pivot helper on the array
        - When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
        - Your base case occurs when you consider a subarray with less than 2 elements & left always should be less than right index.

    
**********************************************************************************************/

// Helper function to find the correct position of the pivot.
function pivot(arr, start=0, end=(arr.length-1)) {
    // first element as pivot
    let pivot = arr[start];
    //swapIndex to track the swapped indexes
    let swapIdx = start;
    //Loop the array. first element is pivot so start from start+1
    for(i=(start+1);i<=end;i++) {
        ///compare the pivot
        if(pivot > arr[i]) {
            //Increase the swap index to track how many elements are smaller than the pivot.
            swapIdx++;

            if(swapIdx != i) {
                // console.log(swapIdx,i)
                //swap the value.
                let temp = arr[i];
                arr[i] = arr[swapIdx];
                arr[swapIdx] = temp;
            }
        }
    }
    //Swapt the pivot into the swapIdx to place the pivot into correct position.
    let temp = arr[swapIdx];
    arr[swapIdx] = pivot;
    arr[start] = temp;

    return swapIdx;
}

function quickSort(arr, left=0, right=arr.length-1) {

    //Base case for recursion: if left is equal or greater than right, then stop.
    if(left < right) {
        let pivotIdx = pivot(arr,left,right);
        //left side
        quickSort(arr,left,(pivotIdx-1));
        //right side
        quickSort(arr,(pivotIdx+1),right);
    }
    return arr;
}



console.log(quickSort([34,11,23,4,8,2,1,5,7,6,3]));
console.log(quickSort([55,-4,100,9,-5,4,3,5,6,7,8]));