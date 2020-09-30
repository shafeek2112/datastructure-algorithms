//Binary search will work only for sorted array.

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