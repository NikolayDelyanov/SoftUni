function flowersShop(input) {

    let magnolias = Number(input[0]);
    let hyacinths = Number(input[1]);
    let roses = Number(input[2]);
    let cactus = Number(input[3]);
    let giftPrice = Number(input[4]);

    let totalSum = magnolias * 3.25 + hyacinths * 4.00 + roses * 3.50 + cactus * 8.00;
    let tax = totalSum * (5 / 100);
    let profit = totalSum - tax;

    let remainder = giftPrice - profit;

    if (profit >= giftPrice) {
        console.log(`She is left with ${Math.abs(Math.ceil(remainder))} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(remainder)} leva.`);
    }

}
flowersShop(["15", "7", "5", "10", "100"]);