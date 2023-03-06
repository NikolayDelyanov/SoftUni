function fishingBoat(input){

let budget = Number(input[0]);
let season = input[1];
let fishersCount = Number(input[2]);

let boatRentPrice = 0;

switch(season){
    case 'Spring':
        boatRentPrice = 3000;
        break;
    case 'Summer':
    case 'Autmn':
        boatRentPrice = 4200;
        break;
    case 'Winter':
        boatRentPrice = 2600;
        break;
        
}

if(fishersCount <= 6){
    boatRentPrice = boatRentPrice * 0.90;
}else if(fishersCount >= 7 && fishersCount <= 11){
    boatRentPrice = boatRentPrice * 0.85;
}else if(fishersCount >= 12){
    boatRentPrice = boatRentPrice * 0.75;
}

if(fishersCount % 2 === 0 && season !== 'Autmn'){
    boatRentPrice = boatRentPrice * 0.95;
}

let diff = Math.abs(budget - boatRentPrice);
if(budget >= boatRentPrice){
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
}else{
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
}

}
fishingBoat(["3000","Summer","11"]);