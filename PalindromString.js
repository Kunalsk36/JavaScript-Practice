// Check whether a string is a palindrome.
// Input: "madam"
// Output: true

// Input: "hello"
// Output: false

// Method 1:
function isPalindrom(str){
    let rev = "";
    for(let i = str.length - 1; i >= 0; i--){
        rev += str[i];
    }
    return str === rev;
}
// console.log(isPalindrom("madam"));
// console.log(isPalindrom("hello"));


// method 2:

function isPalindrom2(str){
    let left = 0;
    let right = str.length-1;
    while(left<right){
        if(str[left]!==str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}


// method 3: Not Optimal 

function isPalindrom3(str){
    let left = 0;
    let right = str.length - 1;
    let arr = str.split("");
    while(left<right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    let rev = arr.join("");
    return str === rev;
}

console.log(isPalindrom2("madam"));
console.log(isPalindrom2("hello"));