function addBags(input) {

    let luggagePriceOver20 = Number(input[0]);
    let luggageKilogram = Number(input[1]);
    let days = Number(input[2]);
    let numLuggage = Number(input[3]);

    let priceLagguge = 0;

    if (luggageKilogram < 10) {
        priceLagguge = luggagePriceOver20 * (20 / 100);

        if (days > 30) {
            priceLagguge = priceLagguge + 0.10 * priceLagguge;
        } else if (days >= 7 && days <= 30) {
            priceLagguge = priceLagguge + 0.15 * priceLagguge;
        } else if (days < 7) {
            priceLagguge = priceLagguge + 0.40 * priceLagguge;
        }

    } else if (luggageKilogram >= 10 && luggageKilogram <= 20) {
        priceLagguge = luggagePriceOver20 * (50 / 100);

        if (days > 30) {
            priceLagguge = priceLagguge + 0.10 * priceLagguge;
        } else if (days >= 7 && days <= 30) {
            priceLagguge = priceLagguge + 0.15 * priceLagguge;
        } else if (days < 7) {
            priceLagguge = priceLagguge + 0.40 * priceLagguge;
        }

    } else if (luggageKilogram > 20) {
        console.log(priceLagguge);

        if (days > 30) {
            priceLagguge = priceLagguge + 0.10 * priceLagguge;
        } else if (days >= 7 && days <= 30) {
            priceLagguge = priceLagguge + 0.15 * priceLagguge;
        } else if (days < 7) {
            priceLagguge = priceLagguge + 0.40 * priceLagguge;
        }
    }

    let totalSum = priceLagguge * numLuggage;

    console.log(`The total price of bags is: ${totalSum.toFixed(2)} lv.`);

}
addBags(["63.80", "23", "3", "1"]);
