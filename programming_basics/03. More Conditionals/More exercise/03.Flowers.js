function flowers(input) {

    let numChrysanthemumsPurchased = Number(input[0]);
    let numRosesPurchased = Number(input[1]);
    let numTulipsPurchased = Number(input[2]);
    let season = input[3];
    let holidayOrNot = input[4];

    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;
    let totalPrice = 0;
    let discount = 0;

    let totalNum = numChrysanthemumsPurchased + numRosesPurchased + numTulipsPurchased;

    let priceToArrange = 2.00;
    let pricePerBouquet = 0;

    switch (season) {
        case 'Spring':
            chrysanthemumsPrice = 2.00;
            rosesPrice = 4.10;
            tulipsPrice = 2.50;
            totalPrice = (numChrysanthemumsPurchased * chrysanthemumsPrice) + (numRosesPurchased * rosesPrice) + (numTulipsPurchased * tulipsPrice);
            if (holidayOrNot == 'Y') {
                totalPrice = totalPrice + 0.15 * totalPrice;
                if (numTulipsPurchased > 7) {
                    discount = totalPrice * (5 / 100);
                    discount = totalPrice - discount;
                } else if (totalNum > 20) {
                    discount = totalPrice * (20 / 100);
                    discount = totalPrice - discount;
                }
            } else if (holidayOrNot == 'N') {

                if (totalNum >= 20) {
                    discount = totalPrice * (20 / 100);
                    discount = totalPrice -= discount;
                }
            }
            pricePerBouquet = discount + priceToArrange;
            console.log(pricePerBouquet.toFixed(2));
            break;
        case 'Summer':
            chrysanthemumsPrice = 2.00;
            rosesPrice = 4.10;
            tulipsPrice = 2.50;
            totalPrice = (numChrysanthemumsPurchased * chrysanthemumsPrice) + (numRosesPurchased * rosesPrice) + (numTulipsPurchased * tulipsPrice);
            if (holidayOrNot == 'Y') {
                totalPrice = totalPrice + 0.15 * totalPrice;
                if (totalNum > 20) {
                    discount = totalPrice * (20 / 100);
                    discount = totalPrice - discount;
                }
            } else if (holidayOrNot == 'N') {

                if (totalNum >= 20) {
                    discount = totalPrice * (20 / 100);
                    discount = totalPrice -= discount;
                }
            }
            pricePerBouquet = discount + priceToArrange;
            console.log(pricePerBouquet.toFixed(2));
            break;
        case 'Autmn':
            chrysanthemumsPrice = 3.75;
            rosesPrice = 4.50;
            tulipsPrice = 4.15;
            totalPrice = (numChrysanthemumsPurchased * chrysanthemumsPrice) + (numRosesPurchased * rosesPrice) + (numTulipsPurchased * tulipsPrice);
            if (holidayOrNot == 'Y') {
                totalPrice = totalPrice + 0.15 * totalPrice;
                if (totalNum > 20) {
                    discount = totalPrice * (20 / 100);
                    discount = totalPrice - discount;
                }
            } else if (holidayOrNot == 'N') {

                if (totalNum >= 20) {
                    discount = totalPrice * (20 / 100);
                    discount = totalPrice -= discount;
                }
            }
            pricePerBouquet = discount + priceToArrange;
            console.log(pricePerBouquet.toFixed(2));
            break;
        case 'Winter':
            chrysanthemumsPrice = 3.75;
            rosesPrice = 4.50;
            tulipsPrice = 4.15;
            totalPrice = (numChrysanthemumsPurchased * chrysanthemumsPrice) + (numRosesPurchased * rosesPrice) + (numTulipsPurchased * tulipsPrice);
            if (holidayOrNot == 'Y') {
                totalPrice = totalPrice + 0.15 * totalPrice;
                if (numRosesPurchased >= 10) {
                    discount = totalPrice * (10 / 100);
                    discount = totalPrice - discount;
                } else if (totalNum > 20) {
                    discount = totalPrice * (20 / 100);
                    discount = totalPrice - discount;
                }
            } else if (holidayOrNot == 'N') {
                if (numRosesPurchased >= 10) {
                    discount = totalPrice * (10 / 100);
                    discount = totalPrice -= discount;
                }

                if (totalNum >= 20) {
                    discount = totalPrice * (20 / 100);
                    discount = totalPrice -= discount;
                }
            }
            pricePerBouquet = discount + priceToArrange;
            console.log(pricePerBouquet.toFixed(2));
            break;
    }


}
flowers(["10", "10", "10", "Autmn", "N"]);