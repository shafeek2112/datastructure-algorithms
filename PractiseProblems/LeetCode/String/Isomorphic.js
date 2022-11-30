/* 
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    //Edge case
    if(s.length !== t.length || s.length === 0) return false;
    
    //Decalre obj
    let stringS = {};
    let stringT = {};
    
    //Loop through
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        let charT = t[i];
        //Check the occurence in the obj
        if(stringS[char] && stringT[charT] && stringS[char] !== charT) return false;
        //If not exists, add it.
        if(!stringS[char] && !stringT[charT]) {
            stringS[char] = charT;
            stringT[charT] = 1;
        }
        if (!stringS[char] || !stringT[charT]) return false;
    }
    return true;
};