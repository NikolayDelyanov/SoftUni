function agencyProfit(input){

let airlaneName = input[0];
let ticketsForAdults = Number(input[1]);
let ticketsForChilds = Number(input[2]);
let netPriceForAdults = Number(input[3]);
let chargePrice = Number(input[4]);

let netPriceForChilds = netPriceForAdults - netPriceForAdults * 0.70;
let adultTicketWithCharge = netPriceForAdults + chargePrice;
let childTicketWithCharge = netPriceForChilds + chargePrice;

let totalPrice = (ticketsForChilds * childTicketWithCharge) + (ticketsForAdults * adultTicketWithCharge);

let profit = totalPrice * (20 / 100);

console.log(`The profit of your agency from ${airlaneName} tickets is ${profit.toFixed(0)} lv.`);



}
agencyProfit(["WizzAir","15","5","120","40"]);