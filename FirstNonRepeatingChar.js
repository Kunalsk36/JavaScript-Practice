// Find the first non-repeating character. 
// Input: "swiss" 
// Output: "w"

function findFirstNonRepeatingChar(str){
    let occ = {};
    for (let i = 0; i < str.length; i++){
        if(!occ[str[i]]){
            occ[str[i]] = 1;
        }
        else{
            occ[str[i]]++;
        }
    }
    
    for(let i = 0; i < str.length; i++){
        if(occ[str[i]] === 1){
            return str[i];
        }
    }

    return -1;
}
console.log(findFirstNonRepeatingChar("eello")); // o
console.log(findFirstNonRepeatingChar("swiss"));   // w
console.log(findFirstNonRepeatingChar("heelloo")); // h
console.log(findFirstNonRepeatingChar("aabbcc"));  // -1