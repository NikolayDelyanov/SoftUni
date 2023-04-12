function birthday(input){

let rentForHall = Number(input[0]);

let cakePrice = rentForHall * (20 / 100);
let drinkPrice = cakePrice - cakePrice * 0.45;
let animatorPrice = (1 / 3) * rentForHall;

let neededSum = rentForHall + cakePrice + drinkPrice + animatorPrice;

console.log(neededSum.toFixed(1));

}
birthday(["2250"])