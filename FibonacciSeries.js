// Print Fibonacci Series:

// Method 1:
function printFibonacci(){
    let num1 = 0;
    let num2 = 1;
    let i = 0;
    while(i<=20){
        console.log(num1);
        let temp = num1;
        num1 = num2;
        num2 = num2+temp;
        i++;
    }
}
printFibonacci();


// Method 2:

function getFibonacciSeries(n){
    if(n<0) return [];
    if(n === 1) return [0];
    let result = [0,1];
    for(let i=2;i<n;i++){
        result.push(result[i-1]+result[i-2]);
    }
    return result;
}
console.log(getFibonacciSeries(20));


// Method 3: recurrsion: directly print nth number
function getFibS(n){
    if(n<=1){ return n;}
    return getFibS(n-1)+getFibS(n-2);
}
console.log(getFibS(20));