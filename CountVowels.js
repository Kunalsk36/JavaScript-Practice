// Count the number of vowels in a string.
// Input: "JavaScript"
// Output: 3

// Method 1:
function countVowels(str){
    let count = 0;
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(str[i]==='a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            count++;
        }
    }
    return count;
}
// console.log(countVowels("JavaScript"));
// console.log(countVowels("HELLO"));
// console.log(countVowels("aeiou"));
// console.log(countVowels("bcdfg"));
// console.log(countVowels(""));

// Method 2:
function countVowels2(str){
    let count = 0;
    let vowels = "aeiou";
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}

console.log(countVowels2("JavaScript"));
console.log(countVowels2("HELLO"));
console.log(countVowels2("aeiou"));
console.log(countVowels2("bcdfg"));
console.log(countVowels2(""));