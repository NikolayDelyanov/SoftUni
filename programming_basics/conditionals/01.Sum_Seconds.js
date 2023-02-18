function sumSecond(input){

let firstTime = Number(input[0]);    
let secondTime = Number(input[1]);
let thirdTime = Number(input[2]);

let totalSum = firstTime + secondTime + thirdTime;
let minuets = (totalSum / 60).toFixed(0);
totalSum = totalSum - (minuets * 60);


if(totalSum <= 10){
    console.log(`${minuets}:0${totalSum}`);
}else{
    console.log(`${minuets}:${totalSum}`);
}



}
sumSecond(["50", "50", "49"]);