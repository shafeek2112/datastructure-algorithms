// HackerRank - https://www.hackerrank.com/challenges/contacts/problem


//Node Class
class Node {
    constructor() {
        this.children = {}; // store the children of each node.
        this.endOfWord = false; // to mark whether the char is the end of the word.
        this.char = 0; // Tracking how many times words cross this node.
    }
}

//Trie class.
class Trie {
    constructor() {
        this.root = new Node(); //Root.
    }
    
    /*
        Insert the nodes into the trie.
        - Declare the current variable and assign root.
        - loop through the each char in the string 
            - Check this char is exists in the root.
                - if no, then add it as the root's child. 
                - if yes, then check the next char.
            - Every time cross this node, increment the char count for that node.
                - this is because, every time cross the node means, adding new item.
            - at the end of the loop assign current = current.children for next iteration
            - repeat this for all the char.
        - Set the endOfword as true.
    */
    insert(word) {
        //Declare the current var 
        let current = this.root;
        //Loop through each char of word.
        for(let i = 0; i < word.length; i++) {
            let char = word[i];
            //Check the char exists 
            if(!current.children[char]) {
                current.children[char] = new Node();
            }
            //Increment the char at everytime cross this char. 
            //Everytime cross the node means, adding new item
            current.children[char].char++;
            //For next iteration
            current = current.children[char];
        }
        //set as end of word.
        current.endOfWord = true;
    }
    
    /*
        Find the prefix in the Trie and return count.
        - Declare the current variable and assign root.
        - loop through the each char in the string 
            - Check this char is exists in the root.
                - if no, then return 0
                - if yes, then check the next char.
            - at the end of the loop assign current = current.children for next iteration
            - repeat this for all the char.
        - If the all the char in the prefix matches, use the last current variable to
            get chars from all the subsequent children.
    */
    find(prefix) {
        //Declare the current var 
        let current = this.root;
        //Loop through each char of word.
        for(let i = 0; i < prefix.length; i++) {
            let char = prefix[i];
            //Check the char exists 
            if(!current.children[char]) return 0;
            current = current.children[char];
        }
        return current.char;
    }
}


/*
 * Complete the 'contacts' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_STRING_ARRAY queries as parameter.
 */

function contacts(queries) {
    // Write your code here
    //Edge case : check queries is not empty.
    if(queries.length == 0) return [];
    //return array with count of find operation
    let count = [];
    //Instance of the class
    let trie = new Trie();
    //loop through the queries
    for(let item of queries) {
        let operation = item[0];
        let word = item[1];
        //Check for the valid operation n word.
        if(operation && word) {
            if(operation == 'add') {
                trie.insert(word);
            } 
            if(operation == 'find') {
                let wordCount = trie.find(word);
                count.push(wordCount);
            }
        }
    }
    return count;
}