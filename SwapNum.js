// Swap two numbers without using third variable

function swapNums(num1, num2){
    num1 = num1+num2;
    num2 = num1-num2;
    num1 = num1-num2;
    return [num1, num2];
}
console.log(swapNums(100,200));


// swap num with using third variable
function swapNum2(num1, num2){
    let temp = num1;
    num1 = num2;
    num2 = temp;
    return [num1,num2];
}
console.log(swapNum2(100,200));