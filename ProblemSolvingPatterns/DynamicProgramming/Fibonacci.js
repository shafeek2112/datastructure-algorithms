
//Normal recurrsion - O(2^N) - very bad
/* function fib(num) {
    if(num == 1 || num == 2) return 1;

    return fib(num-1) + fib(num-2);
} */

//--- Using dynamic programming by storing the subproblems values and using this for future.

/* 
    ------------- Top Down or Memozation Approach
    Time Complexity = O(n) & Space complexity is worser if number is large because of the recursive call.
    If the number is large, it hit the stack overflow error in JS as of lot of rescursive function needs to wait.
*/

function fib(num,memozation={}) {
    if(num == 1 || num == 2) return 1;

    memozation[num-1] = (!memozation[num-1]) ? fib(num-1,memozation) : memozation[num-1];
    memozation[num-2] = (!memozation[num-2]) ? fib(num-2,memozation) : memozation[num-2];
    return memozation[num-1] + memozation[num-2];
}
// ---- 2. Another implementation ----
function fib(num,memozation={}) {
    if(num == 1 || num == 2) return 1;
    if(memozation[num]) return memozation[num];

    let val = fib(num-1,memozation) + fib(num-2,memozation);
    memozation[num] = val;
    return val;
}



/* 
    ------------- Bottom Up or Tabulated Approach
    Time Complexity = O(n) & Space complexity is also O(n). Much better than TopDown approach in terms of space.
*/
function fib_table(n) {
    //Base case.
    if(n <= 2) return 1;
     
    let fibNums = [0,1,1]; 
    for(i=3; i<= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}
