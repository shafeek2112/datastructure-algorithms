/**
The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

 

Example 1:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]
Example 2:

Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]
 

Constraints:

1 <= s.length <= 105
s[i] is either 'A', 'C', 'G', or 'T'. 
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    //----Sliding window pattern.
    const k = 10;
    
    /**
    ----- Belive the input is stritly A/C/G/T, so not adding any validation.
    */
    
    //Edge case.
    const sLength = s.length;
    if(sLength <=0 || sLength < k) return [];
    
    //Hash to track the sequence
    const hashObj = {};
    
    //Fetch the first k's length char from s and store.
    let windowString = s.slice(0,k);
    hashObj[windowString] = 1;
    
    //Result
    const result = [];
    
    //Start from 1 and slowly move the window.
    for(let i = 1; i+k <= sLength; i++) {
        windowString = s.slice(i,i+k);
        if(hashObj[windowString])  {            
            if (hashObj[windowString] === 1) result.push(windowString);
            hashObj[windowString]++;
        }
        else {
            hashObj[windowString] = 1;            
        }
    }
    return result;
};