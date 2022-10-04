/**************** Mergesort ******************
    There are two parts in this algorithms, one is spliting & merging and Sorting.
        - Splitting the arrays in one function 
        - Merging two arrays in other function.
    First split the arrays into half recursively until the array length is 1.
    If only one item in the array, means already sorted. 
    Then merge both right n left side using the helper function with sorting.

*/

/****************** Edge cases or the questions to interviewer: *******************************
    1. Considered the inpust are only numbers or empty arrays. 
    2. Considered the input value is only numbers. +ve or -ve. 


    -----Pseudo code ----------
    Merging two arrays:
        - Create an empty array, take a look at the smallest values in each input array
        - While there are still values we haven't looked at...
            If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
            If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
            Once we exhaust one array, push in all remaining values from the other array

    MergeSort 
        - Break up the array into halves until you have arrays that are empty or have one element
        - Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
        - Once the array has been merged back together, return the merged (and sorted!) array
    

    
**********************************************************************************************/

//Helper funtion: Merge two sorted arrays into one sorted array.
function merge(arr1, arr2) {
    //Empty array
    let result = [];
    //Pointers
    let i = 0;
    let j = 0;
    //while
    while(i < arr1.length && j < arr2.length ) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    //if any one of the array looped fully, then add other array's remaining items into the result
    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

//Recurrsion function to split the array until one item in the array. Then use the helper function to merge.
function mergeSorting(arr) {
    //For recursion, there must be the base case when the function ends.
    if(arr.length <= 1) return arr; 
    //Splitting the array
    let mid = Math.floor(arr.length/2); // Mid point
    let left =  mergeSorting(arr.slice(0,mid));// recursively spliting the itesm in the left side.
    let right = mergeSorting(arr.slice(mid));// recursively spliting the itesm in the right side.
    return merge(left, right);
}

console.log(mergeSorting([8,12,33,48,2,5,30]));
console.log(mergeSorting([1,6,15,33,30,32,26,36,42,45,46,47,48]));


// console.log(merge([4,7,34,78],[1,2,10,22,25,30]));