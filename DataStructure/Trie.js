/*
    - Trie is a type of k-ary search tree used for storing and searching a specific key from a set. Using Trie, search complexities can be brought to optimal limit (key length). 


*/

// class Node {
//     constructor() {
//         this.children = {};
//         this.endOfWord = false;
//     }
// }

// class Trie {
//     constructor() {
//         this.root = null;
//     }

//     insert(word) {
//         if(!this.root) this.root = new Node();
//         let current = this.root;
//         //loop through the word
//         for(let i = 0; i < word.length; i++) {
//             let charToInsert = word[i];
//             //Check the existance.
//             if(!current.children[charToInsert]) {
//                 //Insert
//                 current.children[charToInsert] = new Node();
//             }
//             //For next iteration.
//             current = current.children[charToInsert];
//         }
//         current.endOfWord = true;
//     }
    
//     contains(word) {
//         if(!this.root) return false;
//         let current = this.root;
//         //loop through the word
//         for(let i = 0; i < word.length; i++) {
//             let charToFind = word[i];
//             //Check the existance.
//             if(!current.children[charToFind]) return false;
//             //For next iteration.
//             current = current.children[charToFind];
//         }
//         return current.endOfWord;
//     }

//     haveStartsWith(prefix) {
//         if(!this.root) return false;
//         let current = this.root;
//         //loop through the word
//         for(let i = 0; i < prefix.length; i++) {
//             let charToFind = prefix[i];
//             //Check the existance.
//             if(!current.children[charToFind]) return false;
//             //For next iteration.
//             current = current.children[charToFind];
//         }
//         return true;
//     }
    
//     getWordsStartsWith(prefix) {
//         if(!this.root) return false;
//         let current = this.root;
//         //loop through the word
//         let charToFind;
//         for(let i = 0; i < prefix.length; i++) {
//             charToFind = prefix[i];
//             //Check the existance.
//             if(!current.children[charToFind]) return false;
//             //For next iteration.
//             current = current.children[charToFind];
//         }
//         //Loop throught the current and get all children
//         let word='';
//         let returnWords = [];
//         function recursive(current) {
//             if(current.endOfWord) {
//                 returnWords.push(`${prefix}${word}`);
//             }
//             //Get the keys //loop the keys
//             for (const key in current.children) {
//                 //Append the key in the word
//                 word+=key
//                 //Call the recursive with current.children[key]
//                 recursive(current.children[key])
//             }
//             //Remove the last char from the word when there is no children and go back to previous node.
//             word = word.substring(0, word.length - 1);
//             return;
//         }
//         //Call the helper.
//         recursive(current);
//         return returnWords;
//     }
// }


class Node {
    constructor() {
        this.children = {}; // store the children of each node.
        this.endOfWord = false; // to mark whether the char is the end of the word.
        this.char = 0; // when insert words crosses this node, then increment this to track the word count.
    }
}

//Trie class.
class Trie {
    constructor() {
        this.root = new Node(); //Root.
    }
    
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
        /* //From the current, get all the subsequent children 's chars
        //declare the wordcount
        let wordCount=0;
        //Use the recursion to get all the possible chars
        function recursion(current) {
            //Base case: if its a end of word then count 1.
            if(current.endOfWord) {
                wordCount++;
            }
            //get all the children of the current.
            for(let key in current.children) {
                //Different input for each Recursion
                recursion(current.children[key]);
            }
            return;
        }
        //Call the recursion helper.
        recursion(current); */

        /* //Check the current is endOfWord. If not, then go to the next endword and get the subsequenceWordCount.
        if(!current.endOfWord) {
            function recursion(current) {
                
                //Base case: if its a end of word then count 1.
                if(current.endOfWord) {
                    return current.subsequentWords;
                }
                //get all the children of the current.
                for(let key in current.children) {
                    //Different input for each Recursion
                    recursion(current.children[key]);
                }
            }
            //Call the recursion helper.
            return recursion(current); 
        }
        return current.subsequentWords; */
    }
}




let t = new Trie();
t.insert("OR");
t.insert("DAM");
t.insert("ORC");
t.insert("ORCH");
t.insert("DO");
t.insert("ORKUT");
t.insert("ORE");
