function depositCalculator(input){

let depositSum = Number(input[0]);
let termOfDeposit = Number(input[1]);
let yearInterestRate = Number(input[2]);


let accruedInterest = depositSum * (yearInterestRate / 100);
let monthInterest = accruedInterest / 12;
let totalSum = depositSum + termOfDeposit * monthInterest;  
 
console.log(totalSum);

}
depositCalculator(["200 ","3 ","5.7"]);