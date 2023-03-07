/**
Minimum Window Subsequence [Hard]

Given strings s1 and s2, return the minimum contiguous substring part of s1, so that s2 is a subsequence of the part.

If there is no such window in s1 that covers all characters in s2, return the empty string "". If there are multiple such minimum-length windows, return the one with the left-most starting index.

 

Example 1:

Input: s1 = "abcdebdde", s2 = "bde"
Output: "bcde"
Explanation: 
"bcde" is the answer because it occurs before "bdde" which has the same length.
"deb" is not a smaller window because the elements of s2 in the window must occur in order.
Example 2:

Input: s1 = "jmeqksfrsdcmsiwvaovztaqenprpvnbstl", s2 = "u"
Output: ""
 

Constraints:

1 <= s1.length <= 2 * 104
1 <= s2.length <= 100
s1 and s2 consist of lowercase English letters.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
var minWindow = function(s1, s2) {
    
    let j = 0; //for track the char in s2
    let start = -Infinity; let end = 0; let count = Infinity;
    let subSequence = [];
    //Iterate the s1. 
    for(let i =0; i < s1.length; i++) {
        //If char1 == char2, then increment char2
        if(s1[i] === s2[j]) {
            if(start === -Infinity) {
                start = i;
            }
            if(j === s2.length -1) {
                end = i;
                if((end - start +1) < count) {
                    count = end - start +1;
                    subSequence = [start, end];
                };
                let backI = s2.length -1;
                let backStart = end;
                //Loop backward to find the str.
                while(backStart >= start) {
                    if(s1[backStart] === s2[backI]) {
                        backI--
                    }
                    if(backI < 0) {
                        if((end - backStart +1) < count) {
                            count = end - backStart +1
                            subSequence = [backStart, end];
                        };
                        start = backStart;
                        break;
                    } else {
                        backStart--;
                    }
                }
                //Reset the start & j for next pattern.
                i = start +1;
                start = -Infinity;
                j=0;
            } else {
                j++;
            }
        }
    }
    // Time Complexity = O(n*m) 
        // n is s1 length. 
        // m is for while loop backward check. Its a length of s2
    // Space Complexity = O(1);
    return s1.slice(subSequence[0], subSequence[1]+1);
};