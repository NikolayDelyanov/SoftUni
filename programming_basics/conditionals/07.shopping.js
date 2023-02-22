function shopping(input){

let budget = Number(input[0]);
let numOfVideocards = Number(input[1]);
let numOfProcessor = Number(input[2]);
let numOfRamMemory = Number(input[3]);

let sumForVideocards = numOfVideocards * 250;
let priceForProcessor = sumForVideocards * 0.35;
let sumForProcessor = numOfProcessor * 175;
let priceForRam = sumForVideocards * 0.10;
let sumForRam = numOfRamMemory *priceForRam;

let totalSum = sumForVideocards + sumForProcessor + sumForRam;

let discount = 0;

if(numOfVideocards > numOfProcessor){
    discount = totalSum - 0.15;
}

let diff = Math.abs(totalSum - budget);

if(discount <= budget){
    console.log(`You have ${diff} leva left!`);
}else if(totalSum > budget){
    console.log(`Not enough money! You need ${diff} leva more!`);
}

}
shopping(["900","2","1","3"]);