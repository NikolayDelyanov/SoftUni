function foodDelivary(input){

let chickenMenu = Number(input[0]);
let fishMenu = Number(input[1]);
let vegetarianMenu = Number(input[2]);

let priceForChickenMenu = chickenMenu * 10.35;
let priceForFishMenu = fishMenu * 12.40; 
let priceForVegetarianMenu = vegetarianMenu * 8.15;

let totalPriceOfMenu = priceForChickenMenu + priceForFishMenu + priceForVegetarianMenu;

let desertPrice = totalPriceOfMenu * 0.20;
let priceOfDelivery = 2.50;

let totalPrice = totalPriceOfMenu + desertPrice + priceOfDelivery;

console.log(totalPrice);

}
foodDelivary(["2 ","4 ","3 "]);