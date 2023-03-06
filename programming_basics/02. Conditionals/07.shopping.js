function shopping(input) {

    let budget = Number(input[0]);
    let numOfVideocards = Number(input[1]);
    let numOfProcessor = Number(input[2]);
    let numOfRamMemory = Number(input[3]);

    let sumForVideocards = numOfVideocards * 250;
    let priceForProcessor = sumForVideocards * 0.35;
    let sumForProcessor = numOfProcessor * priceForProcessor;
    let priceForRam = sumForVideocards * 0.10;
    let sumForRam = numOfRamMemory * priceForRam;

    let totalSum = sumForVideocards + sumForProcessor + sumForRam;

    let discount = 0;

    if (numOfVideocards > numOfProcessor) {
        discount = totalSum * (15 / 100);
    }
    totalSum = totalSum - discount;

    let diff = Math.abs(totalSum - budget);

    if (discount <= budget) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else if (totalSum > budget) {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }

}
shopping(["900", "2", "1", "3"]);