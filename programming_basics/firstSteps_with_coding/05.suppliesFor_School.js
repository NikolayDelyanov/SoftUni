function suppliesForSchool (input){

let numOfPens = Number(input[0]);
let numOfMarkers = Number(input[1]);
let litersCleaner = Number(input[2]);
let discount = Number(input[3]);

let priceOfNumOfPens = numOfPens * 5.80;
let priceOfNumOfMarkers = numOfMarkers * 7.20;
let cleanerPrice = litersCleaner * 1.20;

let finalPrice = priceOfNumOfPens + priceOfNumOfMarkers + cleanerPrice;
let discountedPrice = finalPrice - (finalPrice * discount / 100);

console.log(discountedPrice);


}
suppliesForSchool()["2 ","3 ","4 ","25 "];
