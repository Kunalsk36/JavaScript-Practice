// Find factorial using loop

function factorial(num){
    let fact = 1;
    if(num<0) return -1;
    if(num === 0 || num === 1){
        return 1;
    }
    for(let i = 2; i <= num; i++){
        fact *= i;
    }
    return fact;
}
console.log(factorial(4));