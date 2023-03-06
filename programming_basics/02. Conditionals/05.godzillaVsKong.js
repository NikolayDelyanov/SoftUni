function godzillaVsKong(input){

let budget = Number(input[0]);
let numOfExtras = Number(input[1]);
let PriceForOneExtras = Number(input[2]);

let sumForDecor = budget * 0.10;
let sumForClothing = numOfExtras * PriceForOneExtras;
let discount = 0;

if(numOfExtras > 150){
    discount = sumForClothing * 0.10;
}
sumForClothing = sumForClothing - discount;

let totalSum = sumForDecor + sumForClothing;
let diff = Math.abs(budget - totalSum);

if(sumForClothing > budget){
    console.log("Not enough money!");
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
}else if(sumForClothing <= budget){
    console.log("Action!");
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
}

}
godzillaVsKong(["20000","120","55.5"]);