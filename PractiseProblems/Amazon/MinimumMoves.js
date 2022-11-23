/* 
Imagine you are shopping on Amazon.com for some good weight lifting equipment. The equipment you want has plates of many different weights that you can combine to lift. The listing on Amazon gives you an array, plates, that consists of
n different weighted plates, in kilograms. There are no two plates with the same weight. The element plates[i] denotes the weight of the
μ th plate from the top of the stack. You consider weight lifting equipment to be good if the plate at the top is the lightest, and the plate at the bottom is the heaviest. More formally, the equipment with array plates will be called good weight lifting equipment if it satisfies the following conditions (assuming the index of the array starts from 1): - plates[1](2≤i≤n) - plates[i] < plates[n] for all (1
≤i≤n−1)

In one move, you can swap the order of adjacent plates. Find out the minimum number of moves required to form good weight lifting equipment. Example Let the plates be in the order: plates
=[3,2,1]
In the first move, we swap the first and the second plates. After swapping, the order becomes: plates
=[2,3,1]
In the second move, we swap the second and the third plates. After swapping, the In the second move, we swap the second and the third plates. After swapping, the order becomes: plates
=[2,1,3]
In the third move, we swap the first and the second plates. After swapping, the order becomes: plates
=[1,2,3]
Now, the array satisfies the condition after 3 moves. Function Description Complete the function getMinMoves in the editor below. Complete the function getMinMoves in the editor below. getMinMoves has the following parameter: int plates[n]: the distinct weights Returns int: the minimum number of operations required Constraints -
2≤n≤10 
5
-
1≤
plates[i]
≤10 
9
 
for all
(1≤i≤n)
- plates consists of distinct integers. Input Format For Custom Testing The first line contains an integer,
n
, the number of elements in array plates. Each line
i
of the
n
subsequent lines (where
1≤i≤n
) contains an integer, plates[i]. Sample Case 0
*/

function minimumMove(arr) {

    // ----- Implement swapping using Bubble sort. -------

    //Declare 2 variable i & j with 0 & 1 resp.
    let i = 0; let j = 1;
    //Declare swapCount to track the swap count.
    let swapCount = 0;
    //Length of array - arrayLen - 1
    let iteration = arr.length-1;
    //while => j < (arrLen - loopCount)
    while(j <= iteration) {
        //If i is greater than j
        if(arr[i] > arr[j]) {
            //do swap and increase swapCount.
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            swapCount++;
        }
        //If i is lesser. do nothing.
        //At the end of the looping, decrease the iteration and reset the i & j with 0 & 1 resp
        if(j == iteration) {
            iteration--;
           i=0;
           j=1;
        } else {
            //Increase i & j.
            i++;j++;
        }
    }
    //return the swapCount.
    return swapCount;
}

// console.log(minimumMove([3,2,1]));
console.log(minimumMove([7,8,1,4,3,9,2]));

/* 
Sample 1: 
    Input = [3,2,1] => [2,3,1] => [2,1,3] => [1,2,3] ==> Output = 3
    
Sample 2:
    Input = [7,8,1,4,3,9,2] => [7,1,4,3,8,2,9] => ..... output = 12


*/