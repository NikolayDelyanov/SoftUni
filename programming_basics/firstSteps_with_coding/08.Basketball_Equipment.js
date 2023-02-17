function basketballEquipment(input){

let annualFee = Number(input[0]);


let priceBasketballSneakers = annualFee * 0.60;
let priceBasketballApparel = priceBasketballSneakers * 0.80;
let priceBasketballBall = priceBasketballApparel * 0.25;
let priceBasketballAccessories = priceBasketballBall * 0.2;

let totalPrice = annualFee + priceBasketballSneakers + priceBasketballApparel + priceBasketballBall + priceBasketballAccessories;

console.log(totalPrice);

}
basketballEquipment(["365"]);