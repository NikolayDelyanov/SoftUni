function fishMarket(input) {

    let mackerelPrice = Number(input[0]);
    let cacaPrice = Number(input[1]);
    let bonitoPrice = Number(input[2]);
    let safridPrice = Number(input[3]);
    let shellsPrice = Number(input[4]);

    let bonitoKilogramPrice = mackerelPrice + mackerelPrice * 0.60;
    let bonitoSum = bonitoPrice * bonitoKilogramPrice;

    let safridKilogramPrice = cacaPrice + cacaPrice * 0.80;
    let safridSum = safridPrice * safridKilogramPrice;

    let shellsSum = shellsPrice * 7.50;

    let totalSum = bonitoSum + safridSum + shellsSum;

    console.log(totalSum.toFixed(2));


}
fishMarket(["6.90",
    "4.20",
    "1.5",
    "2.5",
    "1"]);