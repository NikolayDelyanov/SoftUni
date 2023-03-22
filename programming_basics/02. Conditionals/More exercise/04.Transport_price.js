function transportPrice(input) {

    let n = Number(input[0]);
    let timeOfDay = input[1];

    let tariff = 0;

    if (n >= 100) {
        let train = 0.06;
        let totalTrainPrice = n * train;
        console.log(totalTrainPrice.toFixed(2));
    } else if (n >= 20) {
        let autobus = 0.09;
        let totalBusPrice = n * autobus;
        console.log(totalBusPrice.toFixed(2));
    } else if (n < 20 && timeOfDay == "day") {
        let taxiPrice = 0.70;
        tariff = 0.79;
        let totalDayPrice = taxiPrice + (n * tariff);
        console.log(totalDayPrice.toFixed(2));
    } else if (timeOfDay == "night") {
        tariff = 0.90;
        let totalNightPrice = taxiPrice + (n * tariff);
        console.log(totalNightPrice.toFixed(2));
    }

}
transportPrice(["7", "night"]);