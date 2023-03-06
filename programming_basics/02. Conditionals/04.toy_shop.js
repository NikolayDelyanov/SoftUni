function toyShop(input){

let excursionPrice = Number(input[0]);
let numOfPuzzle = Number(input[1]);
let numOfTalkingDolls = Number(input[2]);
let numOfTeddyBears = Number(input[3]);
let numOfMinions = Number(input[4]);
let numOfToyTrucks = Number(input[5]);


let toysCount = numOfPuzzle + numOfTalkingDolls + numOfTeddyBears + numOfMinions + numOfToyTrucks;
let money = numOfPuzzle * 2.60 + numOfTalkingDolls * 3.00 + numOfTeddyBears * 4.10 + numOfMinions * 8.20 
+ numOfToyTrucks * 2.00;


if(toysCount >= 50){
   money = money * 0.75;
}
money = money * 0.90;

let diff = Math.abs(money - excursionPrice);
if (money >= excursionPrice){
    console.log(`Yes! ${diff.toFixed(2)} lv left.`);
}else{
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
}

}
toyShop(["40.8","20","25","30","50","10"]);