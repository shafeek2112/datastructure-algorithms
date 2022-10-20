//Binary search will work only for sorted array.

/* Pseduo code

    -	This function accepts a sorted array and a value
    -	Create a left pointer at the start of the array, and a right pointer at the end of the array
    -   Edge case 
            -> if the array is empty
            ->  Since this is sorted array arr[left] > num || arr[right] < num -> return -1
    -	While the left pointer comes before the right pointer:
    -	Create a pointer in the middle
    -	If you find the value you want, return the index
    -	If the value is too small, move the left pointer up
    -	If the value is too large, move the right pointer down
    -	If you never find the value, return -1

    funct binarySearch(arr, num) {

        //Edge case
            - if array is empty return -1
            - since this is sorted array arr[0] > num || arr[arr.length - 1] < num -> return -1

        - Declare two variable start = 0 and end = arr.length - 1

        while (start < end) {

            - if arr[start] == num -> return start
            - if arr[end] == num -> return end

            //Find the middle
            middle = (start+end)/2 => round this value.

            - if the arr[middle] < num -> start = middle+1

            - if the arr[middle] > num -> end = middle-1

            - if the arr[middle] == num -> return middle
        }
        return -1
    }


*/

function binarySearch(arr,num)
{
    // console.log(arr.length); return null;
    if(arr.length === 0) return -1;


    if(arr[0] > num || arr[arr.length-1] < num) return -1;
    
    let start = 0; 
    let end = arr.length-1;

    while(start < end)
    {
        let middle = Math.floor((start + end) / 2);

        if(arr[middle] === num) 
        {
            return middle;
        }
        else if(arr[middle] < num)
        {
            start = middle + 1;
        }
        else 
        {
            end = middle - 1;
        }

        if(start === end && arr[start] === num) return start;
    }
    return -1;
}

// console.log(binarySearch([1,2,3,4,5],2));
// console.log(binarySearch([1,2,3,4,5],3));
// console.log(binarySearch([1,2,3,4,5],5));
// console.log(binarySearch([1,2,3,4,5],6));
console.log(binarySearch([5,8,9,12,25,32,39,41,43,49,55,69,71,78,80,84,91, 101,104,
    106,108,109,155,168,187,199,201,216,222,246,277,282,299,309,318,329,339,378],379));