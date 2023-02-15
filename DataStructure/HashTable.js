/* 
*   HashTable using the array. This is already in the JS as Object, here just to understand how its works
*   behind the scene.
*/

class HashTable {

    constructor(size=53) {
        this.keyMap = new Array(size);
    }
    //Function to hash the key.
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31; //Prime number reduce the colluisions.
        for(let i=0; i < Math.min(key.length, 100); i++) {
            let char= key[i];
            let value = char.charCodeAt(0) - 96;//it gives the 1 to 26 for alphbets
            total = (total * WEIRD_PRIME + value) % this.keyMap.length; //% is used to get the number with the size given.
        }
        return total;
    }
    //Set the value in the array
    set(key,value) {
        //Get the hash 
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        //Check if duplicate key.
        let found = false;
        for(let i=0; i<this.keyMap[index].length;i++) {
            //If key is already exists, overwrite the value.
            if(this.keyMap[index][i][0] === key) {
                this.keyMap[index][i][1] = value; 
                found = true;
                break;
            }
        }
        if(!found) this.keyMap[index].push([key, value]);
    }
    //Get the item using the key.
    get(key) {
        //Get the index
        let index = this._hash(key);
        if(this.keyMap[index]) {
            //Loop through 
            for (const item of this.keyMap[index]) {
                if(item[0] && item[0] === key) return item[1];
            }
        }
        return undefined;
    }
    //Get all the keys
    keys() {
        let keysArr = [];
        for (const items of this.keyMap) {
            for (const item of items) {
                keysArr.push(item[0]);
            }
        } 
        return keysArr;
    }
    //Get all the values
    values() {
        let valuesArr = [];
        let unique = {};
        for (const items of this.keyMap) {
            for (const item of items) {
                if(!unique[item[1]]) {
                    valuesArr.push(item[1]);
                    unique[item[1]] = 1;
                }
            }
        } 
        return valuesArr;
    }
}

let ht = new HashTable(4); // Size = 4 for testing.
ht.set("Hi", "Hello");
ht.set("I Love", "Code");
ht.set("Hash", "Table");
ht.set("French", "Fries");
ht.set("Rian", "Haady");
ht.set("Sha", "Jazz");
ht.set("olive","#808000");
ht.set("olive1","#808000");