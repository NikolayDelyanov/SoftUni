function sumSecond(input){

let firstTime = Number(input[0]);    
let secondTime = Number(input[1]);
let thirdTime = Number(input[2]);

let totalSum = firstTime + secondTime + thirdTime;
let minuets = (totalSum / 60).toFixed(0);
let seconds = totalSum % 60;


if(totalSum < 10){
    console.log(`${minuets}:0${seconds}`);
}else{
    console.log(`${minuets}:${seconds}`);
}



}
sumSecond(["50", "50", "49"]);