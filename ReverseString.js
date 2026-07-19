// 1. Reverse StringProblem Statement:
// Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with $O(1)$ extra memory.
// Example: Input: s = ["h","e","l","l","o"] 
// Output: ["o","l","l","e","h"]


// Method 1:
function reverseStr(str){
    let rev = "";
    for(let i = str.length-1; i>=0; i--){
        rev+=str[i];
    }
    return rev;
}
// console.log(reverseStr("Kunal"));

// Method 2:
function reverseStr2(str){
    let left = 0;
    let right = str.length - 1;
    let arr = str.split("");
    while(left<right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join("");
}
console.log(reverseStr2("kunal"));
// console.log(reverseStr2("KunalK"));