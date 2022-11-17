//HackerRank - https://www.hackerrank.com/challenges/balanced-brackets/submissions/code/301393368

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
    // Write your code here
    
    //Edge : if s is empty, return NO.
    
    //Examples
        // {(([])[])[]} => Yes
        // {[()]} => Yes
        // {[(])} => No
        // {{[[(())]]}} => Yes
        //
    
    // When we look at this, we can say, string length always should be even number.
    const stringLength = s.length;
    if(((stringLength % 2) != 0) || stringLength < 1) return "NO";
    
    //Create a object to store the matched brackets. Use this to compare.
    let openBracket = {
        "{" : "}",
        "[" : "]",
        "(" : ")",
    };
    let closeBracket = {
         "}" : "{",
         "]" : "[",
         ")" : "(",
    };
    //Declare a stack data structure using array.
    let stack = [];
    //Loop through the string
    for(let i =0; i < stringLength; i++) {
        let current = s[i];
        //check i is open bracket, if yes then push into stack.
        if(openBracket[current]) stack.push(current);
        //if its close, compare with last one.
        if(closeBracket[current]) {
            let last = stack.pop();
            if(last !== closeBracket[current]) return "NO";
        }
    }
    return (stack.length === 0 ) ? "YES" : "NO";
}
// {(([])[])[]]}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();
        const result = isBalanced(s);

        ws.write(result + '\n');
    }

    ws.end();
}