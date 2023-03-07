/* 
Count Different Palindromic Subsequences : [[[ HARD ]]]

Given a string s, return the number of different non-empty palindromic subsequences in s. Since the answer may be very large, return it modulo 109 + 7.
A subsequence of a string is obtained by deleting zero or more characters from the string.
A sequence is palindromic if it is equal to the sequence reversed.
Two sequences a1, a2, ... and b1, b2, ... are different if there is some i for which ai != bi.

 

Example 1:

Input: s = "bccb"
Output: 6
Explanation: The 6 different non-empty palindromic subsequences are 'b', 'c', 'bb', 'cc', 'bcb', 'bccb'.
Note that 'bcb' is counted only once, even though it occurs twice.
Example 2:

Input: s = "abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba"
Output: 104860361
Explanation: There are 3104860382 different non-empty palindromic subsequences, which is 104860361 modulo 109 + 7.
 

Constraints:

1 <= s.length <= 1000
s[i] is either 'a', 'b', 'c', or 'd'.
*/

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequences = function(s) {
    
    /* 
        Input:
            => a bcdabcdabcda b => a,b => 
                a,a | b,a 

    */

    //1. 2D dp arrray to store i,i = 1;
    let dp = new Array().map()
    for (let i = 0; i < s.length; i++) {
               
    }

    //2. call recursion
    recursion(0,s.length-1);


    function recursion(i,j) {
        //if in the hash.
        if(dp[i][j]) {
            return dp[i][j];
        }
        if(i === j) {
            return 1;
        }
        if(s[i]==s[j]) {
            return 1 + recursion(i,j-1) + recursion(i+1,j);
        }
        else {
            return recursion(i,j-1) + recursion(i+1,j);
        }
    }





};