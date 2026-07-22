// Find largest of three numbers

// Method 1:
function findLargest(num1, num2, num3){
    if(num1 > num2){
        if(num1>num3){
            return num1;
        }
        else{
            return num3;
        }
    }
    else{
        if(num2>num3){
            return num2;
        }
        else{
            return num3;
        }
    }
}
console.log(findLargest(4,3,2));


// Method 2:
function findLargest2(num1, num2, num3){
    if(num1>=num2 && num1>=num3){
        return num1;
    }
    else if(num2>=num1 && num2>=num3){
        return num2;
    }
    else{
        return num3;
    }
}
console.log(findLargest2(4,3,2));


// Method 3:
function findLargest3(num1, num2, num3){
    return Math.max(num1,num2,num3);
}
console.log(findLargest3(1,3,5));