function integerAndFloat(firstNum,secondNum,thirdNum){

let sum = firstNum + secondNum + thirdNum;

if(sum % 1 === 0){
    sum += ' - Integer';
} else {
    sum += ' - Float';
}

console.log(sum);

}
integerAndFloat(100, 200, 303);