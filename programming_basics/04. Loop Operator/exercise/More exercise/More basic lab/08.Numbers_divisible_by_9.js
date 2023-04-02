function numsDivisibleBy9(input){

let num1 = Number(input[0]);
let num2 = Number(input[1]);

let totalSum = 0;

for(let i = num1; i <= num2; i++){
    if(i % 9 === 0){
        totalSum += i;
    }
}
console.log(`The sum: ${totalSum}`);

for(let i = num1; i <= num2; i++){
    if(i % 9 === 0){
        console.log(i);
    }
}
 
}
numsDivisibleBy9(["100","200"]);