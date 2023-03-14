function vegetableMarket(input) {

    let priceKilogramVegetables = Number(input[0]);
    let priceKilogramFruits = Number(input[1]);
    let totalKilogramVegetable = Number(input[2]);
    let totalKilogramFruits = Number(input[3]);

    let totalSumVegetables = priceKilogramVegetables * totalKilogramVegetable;
    let totalSumFruits = priceKilogramFruits * totalKilogramFruits;

    let totalSum = (totalSumVegetables + totalSumFruits) / 1.94;

    console.log(totalSum.toFixed(2));


}
vegetableMarket(["0.194",
    "19.4",
    "10",
    "10"]);