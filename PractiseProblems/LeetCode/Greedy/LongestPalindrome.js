/* 
Longest Palindrome
Easy
4K
238
company
Amazon
company
Apple
company
Microsoft
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const strLength = s.length;
    if(strLength === 0) return 0;
    if(strLength === 1) return 1;
    //Declare obj to count the chars.
    let charCount = {};
    //Loop through the string and assign the count in the obj
    for(let i = 0; i < strLength; i++) {
        const char = s[i];
        charCount[char] = (charCount[char]) ? charCount[char] + 1 : 1;
    }
    //Loop thorough the obj, sum the chars count is 2 or greater 
    let middleChar = false;
    let count = 0;
    for(let chars in charCount) {
        let mod = charCount[chars] % 2;
        if(mod !== 0) {
            count += (!middleChar) ? charCount[chars]: charCount[chars]-1;
            middleChar = true;
        } else {
            count += charCount[chars];
        }
    }
    return count;
};