// Convert the first character of every word to uppercase.
// Input: "hello world from js"
// Output: "Hello World From Js"

function firstCharUpper(str){
    let arr = str.split(" ");
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    str = arr.join(" ");
    return str;
}
console.log(firstCharUpper("hello world from js"));


// Method 2: Using Flag:
function firstCharUpper2(str){
    let result = "";
    let flag = true;
    for(let i = 0; i < str.length; i++){
        if(flag){
            result += str[i].toUpperCase();
            flag = false;
        }
        else{
            result += str[i];
        }
        if(str[i] === " "){
            flag = true;
        }
    }
    return result;
}

console.log(firstCharUpper2("hello world from js"));