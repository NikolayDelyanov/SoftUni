//Start exam 22:18

function birthdayParty(input){

let rentForHall = Number(input[0]);


let cakePrice = rentForHall * (20 / 100);
let drinkPrice = cakePrice - cakePrice * 0.45;
let animatorPrice = (1 / 3) * rentForHall;

let neededSum = rentForHall + cakePrice + drinkPrice + animatorPrice;

console.log(neededSum);

}


birthdayParty(["2250"]);
